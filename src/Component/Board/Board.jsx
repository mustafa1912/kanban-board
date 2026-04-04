import React, { useMemo } from 'react'
import Column from './Column'
import { UseTasks } from '../../Hooks/UseTasks';

function Board() {
    const { data, isLoading, error } = UseTasks();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    const tasks = data?.data || [];

    const COLS = [
        { id: '1', type: 'backlog', label: 'Backlog', color: '#6366f1', },
        { id: '2', type: 'in_progress', label: 'In Progress', color: '#f59e0b', },
        { id: '3', type: 'in_review', label: 'In Review', color: '#ec4899', },
        { id: '4', type: 'done', label: 'Done', color: '#10b981', },
    ];



    return (
        <div className='main-boards px-3 pt-2'>
            <div className='d-flex align-items-center gap-4'>
                {COLS.map((item) => (
                    <div key={item.id}>
                        <span style={{ backgroundColor: item.color }} className='color-dot me-2'></span >
                        <span className='color-label'>{item.label}: <strong> {tasks.filter(itemTask => itemTask.column === item.type).length}
                        </strong></span>
                    </div>
                ))
                }
            </div>
            <div className='boards mt-3' >
                {COLS.map((item) => (
                    <Column key={item.id} type={item.type} item={item} tasks={tasks} />
                ))}
            </div>
        </div>
    )
}

export default Board
