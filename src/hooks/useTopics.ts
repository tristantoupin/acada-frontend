import { CoreTopic } from "models/topic";
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

interface UseTopicParams extends ObjectId {
    accessToken?: string;
}
interface UseCreateTopicParams {
    accessToken: string;
    newTopic: CoreTopic;
}

interface UseSearchTopicParams {
    accessToken?: string;
    searchQuery: object;
}
type UpdateTopicParams = ObjectId & Partial<CoreTopic>; // Make all other Topic properties optional

interface UseUpdateTopicParams extends UpdateTopicParams {
    accessToken: string;
}
interface UseDeleteTopicParams extends ObjectId {
    accessToken?: string;
}

const QUERY_KEY = "Topics";
const TOPIC_QUERY_PATH = "topics";

export const useTopic = ({ id, accessToken }: UseTopicParams) => {
    return useQuery({
        queryKey: [QUERY_KEY, id],
        queryFn: () => fetchData(accessToken!, TOPIC_QUERY_PATH, id),
        enabled: !!accessToken,
    });
};

export const useTopics = (accessToken?: string) => {
    return useQuery({
        queryKey: [QUERY_KEY, "all"],
        queryFn: () => fetchAllData(accessToken!, TOPIC_QUERY_PATH),
        enabled: !!accessToken,
    });
};

export const useCreateTopic = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ accessToken, newTopic }: UseCreateTopicParams) =>
            createData(accessToken, TOPIC_QUERY_PATH, newTopic),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY, "search"] });
        },
    });
};

export const useSearchTopic = ({ accessToken, searchQuery }: UseSearchTopicParams) => {
    const searchQueryKey = JSON.stringify(searchQuery);

    return useQuery({
        queryKey: [QUERY_KEY, "search", searchQueryKey],
        queryFn: () => searchData(accessToken!, TOPIC_QUERY_PATH, searchQuery),
        enabled: !!accessToken,
    });
};

export const useUpdateTopic = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ accessToken, id, ...updates }: UseUpdateTopicParams) =>
            updateData(accessToken, TOPIC_QUERY_PATH, id, updates),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
        },
    });
};

export const useDeleteTopic = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ accessToken, id }: UseDeleteTopicParams) =>
            deleteData(TOPIC_QUERY_PATH, id, accessToken),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
        },
    });
};
