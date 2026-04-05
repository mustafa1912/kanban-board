import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateTask } from '../services/TaskApi';

export function UseUpdateTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }) => UpdateTask(id, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
    });
}