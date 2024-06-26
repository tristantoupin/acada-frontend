import { CoreMessage } from "models/message";
import { ObjectId } from "models/document";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    fetchData,
    fetchAllData,
    updateData,
    createData,
    deleteData,
    searchData,
} from "services/api-connector";

interface UseMessageParams extends ObjectId {
    accessToken?: string;
}
interface UseCreateMessageParams {
    accessToken: string;
    newMessage: CoreMessage;
}

interface UseSearchMessageParams {
    accessToken?: string;
    searchQuery: object;
}
type UpdateMessageParams = ObjectId & Partial<CoreMessage>; // Make all other Message properties optional

interface UseUpdateMessageParams extends UpdateMessageParams {
    accessToken: string;
}
interface UseDeleteMessageParams extends ObjectId {
    accessToken?: string;
}

const QUERY_KEY = "Messages";
const TOPIC_QUERY_PATH = "messages";

export const useMessage = ({ id, accessToken }: UseMessageParams) => {
    return useQuery({
        queryKey: [QUERY_KEY, id],
        queryFn: () => fetchData(accessToken!, TOPIC_QUERY_PATH, id),
        enabled: !!accessToken,
    });
};

export const useMessages = (accessToken?: string) => {
    return useQuery({
        queryKey: [QUERY_KEY, "all"],
        queryFn: () => fetchAllData(accessToken!, TOPIC_QUERY_PATH),
        enabled: !!accessToken,
    });
};

export const useCreateMessage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ accessToken, newMessage }: UseCreateMessageParams) =>
            createData(accessToken, TOPIC_QUERY_PATH, newMessage),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY, "search"] });
        },
    });
};

export const useSearchMessage = ({ accessToken, searchQuery }: UseSearchMessageParams) => {
    const searchQueryKey = JSON.stringify(searchQuery);

    return useQuery({
        queryKey: [QUERY_KEY, "search", searchQueryKey],
        queryFn: () => searchData(accessToken!, TOPIC_QUERY_PATH, searchQuery),
        enabled: !!accessToken,
    });
};

export const useUpdateMessage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ accessToken, id, ...updates }: UseUpdateMessageParams) =>
            updateData(accessToken, TOPIC_QUERY_PATH, id, updates),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
        },
    });
};

export const useDeleteMessage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ accessToken, id }: UseDeleteMessageParams) =>
            deleteData(TOPIC_QUERY_PATH, id, accessToken),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
        },
    });
};
