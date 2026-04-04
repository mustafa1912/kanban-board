import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../services/TaskApi";

export const UseTasks = () => {
    return useQuery({
        queryKey: ["tasks"],
        queryFn: getTasks,
    });
};