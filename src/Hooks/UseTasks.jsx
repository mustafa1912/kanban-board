import { useQuery } from '@tanstack/react-query';
import { GetTasks } from '../services/TaskApi';

export function UseTasks() {
    return useQuery({ queryKey: ['tasks'], queryFn: GetTasks });
}
