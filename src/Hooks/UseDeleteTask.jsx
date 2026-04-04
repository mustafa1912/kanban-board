import { useQueryClient } from '@tanstack/react-query';
import { deleteTask } from '../services/TaskApi';


export function UseDeleteTask() {
    const queryClient = useQueryClient();
    return useMutation(deleteTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
    });
}