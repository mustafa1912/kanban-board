//  Column
import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Task from './Task';

function Column({ type, item, tasks }) {
    const filteredTasks = tasks.filter(task => task.column === type);

    return (
        <div className="column d-flex flex-column p-3" >

            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <span span style={{ backgroundColor: item.color }} className='color-dot me-2'></span >
                    <h5 className='fw-bold' >{item.label}</h5>
                </div>
                <Badge bg="secondary">
                    {filteredTasks.length}
                </Badge>
            </div>
            {filteredTasks.map(item => (
                <div key={item.id} className="my-2">
                    <Task task={item} />
                </div>
            ))}

        </div>
    );
}

export default Column;