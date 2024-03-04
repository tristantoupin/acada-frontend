import { CoreUser } from "models/user";
import { ObjectId } from "models/document";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    fetchData,
    fetchAllData,
    updateData,
    createData,
    deleteData,
} from "services/api-connector";

interface UseUserParams extends ObjectId {
    accessToken?: string;
}
interface UseCreateUserParams {
    accessToken: string;
    newUser: CoreUser;
}
type UpdateUserParams = ObjectId & Partial<CoreUser>; // Make all other User properties optional

interface UseUpdateUserParams extends UpdateUserParams {
    accessToken: string;
}
interface UseDeleteUserParams extends ObjectId {
    accessToken: string;
}

const QUERY_KEY = "User";
const USER_QUERY_PATH = "users";

export const useUser = ({ id, accessToken }: UseUserParams) => {
    return useQuery({
        queryKey: [QUERY_KEY, id],
        queryFn: () => fetchData(accessToken!, USER_QUERY_PATH, id),
        enabled: !!accessToken,
    });
};

export const useUsers = (accessToken?: string) => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => fetchAllData(accessToken!, USER_QUERY_PATH),
        enabled: !!accessToken,
    });
};

export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ accessToken, newUser }: UseCreateUserParams) =>
            createData(accessToken, USER_QUERY_PATH, newUser),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
        },
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ accessToken, id, ...updates }: UseUpdateUserParams) =>
            updateData(accessToken, USER_QUERY_PATH, id, updates),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ accessToken, id }: UseDeleteUserParams) =>
            deleteData(accessToken, USER_QUERY_PATH, id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
        },
    });
};
