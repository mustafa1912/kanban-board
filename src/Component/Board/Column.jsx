import Badge from 'react-bootstrap/Badge';
import { useDroppable } from '@dnd-kit/core';
import Task from './Task';

function Column({ type, item, tasks }) {
    const filteredTasks = tasks.filter(task => task.column === type);
    const { setNodeRef, isOver } = useDroppable({ id: type });

    return (
        <div
            ref={setNodeRef}
            className="column d-flex flex-column p-3"
            style={{ background: isOver ? '#f8f9ff' : undefined }}
        >
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <span style={{ backgroundColor: item.color }} className='color-dot me-2'></span>
                    <h5 className='fw-bold'>{item.label}</h5>
                </div>
                <Badge bg="secondary">{filteredTasks.length}</Badge>
            </div>

            {filteredTasks.map(t => (
                <div key={t.id} className="my-2">
                    <Task task={t} />
                </div>
            ))}
        </div>
    );
}

export default Column;