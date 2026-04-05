import { useEffect, useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import Column from './Column';
import { UseTasks } from '../../Hooks/UseTasks';
import { UseUpdateTask } from '../../Hooks/UseUpdateTask';

function Board() {
    const { data, isLoading, error } = UseTasks();
    const { mutate: updateTask } = UseUpdateTask();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data?.data || []);
    }, [data]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    const COLS = [
        { id: '1', type: 'backlog', label: 'Backlog', color: '#6366f1' },
        { id: '2', type: 'in_progress', label: 'In Progress', color: '#f59e0b' },
        { id: '3', type: 'in_review', label: 'In Review', color: '#ec4899' },
        { id: '4', type: 'done', label: 'Done', color: '#10b981' },
    ];

    const handleDragEnd = ({ active, over }) => {
        if (!over) return;

        const taskId = String(active.id);
        const newColumn = String(over.id);

        const current = tasks.find(t => String(t.id) === taskId);
        if (!current || current.column === newColumn) return;

        const updated = { ...current, column: newColumn };

        // Optimistic UI
        setTasks(prev => prev.map(t => String(t.id) === taskId ? updated : t));

        // Persist to API
        updateTask({ id: taskId, data: updated });
    };

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <div className='main-boards px-3 pt-2'>
                <div className='d-flex align-items-center gap-4'>
                    {COLS.map(col => (
                        <div key={col.id}>
                            <span style={{ backgroundColor: col.color }} className='color-dot me-2'></span>
                            <span className='color-label'>
                                {col.label}: <strong>{tasks.filter(t => t.column === col.type).length}</strong>
                            </span>
                        </div>
                    ))}
                </div>

                <div className='boards mt-3'>
                    {COLS.map(col => (
                        <Column key={col.id} type={col.type} item={col} tasks={tasks} />
                    ))}
                </div>
            </div>
        </DndContext>
    );
}

export default Board;