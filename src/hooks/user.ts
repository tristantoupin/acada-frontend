import { CoreUser } from "models/user";
import { ObjectId } from "models/document";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    fetchData,
    fetchAllData,
    updateData,
    createData,
    deleteData,
} from "utils/api-connector";

type CreateUserParams = CoreUser;
type UpdateUserParams = ObjectId & Partial<CoreUser>; // Make all other User properties optional

const QUERY_KEY = "User";
const USER_QUERY_PATH = "users";

export const useUser = ({id}: ObjectId) => {
    return useQuery({
        queryKey: [QUERY_KEY, id],
        queryFn: () => fetchData(USER_QUERY_PATH, id),
    });
};

export const useUsers = () => {
    return useQuery({
        queryKey: [QUERY_KEY],
        queryFn: () => fetchAllData(USER_QUERY_PATH),
    });
};

export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUser: CreateUserParams) =>
            createData(USER_QUERY_PATH, newUser),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
        },
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updates }: UpdateUserParams) =>
            updateData(USER_QUERY_PATH, id, updates),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id }: ObjectId) => deleteData(USER_QUERY_PATH, id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
        },
    });
};
