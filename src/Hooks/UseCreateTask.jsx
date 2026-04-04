import { useQueryClient, useMutation } from '@tanstack/react-query';
import { CreateTask } from '../services/TaskApi';

export function UseCreateTask() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: CreateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}