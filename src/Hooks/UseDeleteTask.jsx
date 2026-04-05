import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteTask } from '../services/TaskApi';

export function UseDeleteTask() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => DeleteTask(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}