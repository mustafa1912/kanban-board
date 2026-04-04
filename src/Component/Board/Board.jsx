import React, { useMemo } from 'react'
import Column from './Column'
import { UseTasks } from '../../Hooks/UseTasks';

function Board() {

    const tasks = useMemo(() => [
        {
            id: 1,
            title: "Design UI",
            description: "Make dashboard layout",
            priority: "Low",
            column: "backlog",
        },
        {
            id: 1,
            title: "Design UI",
            description: "Make dashboard layout",
            priority: "Low",
            column: "backlog",
        },
        {
            id: 2,
            title: "API Integration",
            description: "Connect backend",
            priority: "Medium",
            column: "in_progress"
        },
        {
            id: 3,
            title: "API Integration",
            description: "Connect backend",
            priority: "Medium",
            column: "in_progress"
        }
        ,
        {
            id: 4,
            title: "uthentication flow",
            description: "Connect backend",
            priority: "Low",
            column: "in_progress"
        }
        ,
        {
            id: 5,
            title: "  ark mode support",
            description: "Connect backend",
            priority: "Medium",
            column: "done"
        }
        ,
        {
            id: 6,
            title: "ile upload component ",
            description: "Connect backend",
            priority: "Low",
            column: "in_review"
        }
        ,
        {
            id: 6,
            title: "ile upload component ",
            description: "Connect backend",
            priority: "Low",
            column: "in_review"
        }
    ], []);

    const COLS = useMemo(() => [
        { id: '1', type: 'backlog', label: 'Backlog', color: '#6366f1', },
        { id: '2', type: 'in_progress', label: 'In Progress', color: '#f59e0b', },
        { id: '3', type: 'in_review', label: 'In Review', color: '#ec4899', },
        { id: '4', type: 'done', label: 'Done', color: '#10b981', },
    ], []);



    return (
        <div className='main-boards px-3 pt-2'>
            <div className='d-flex align-items-center gap-4'>
                {COLS.map((item) => (
                    <div key={item.id}>
                        <span span style={{ backgroundColor: item.color }} className='color-dot me-2'></span >
                        <span className='color-label'>{item.label}: <strong> {tasks.filter(itemTask => itemTask.column === item.type).length} </strong></span>
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
