// Task
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useModal } from '../../context/ModalContext';

function Task({ task }) {
    const { openEdit } = useModal();
    const { openDelete } = useModal();

    return (
        <>
            <Card key={task.id} className='my-2 mx-auto'  >
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Text>
                        {task.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <button className='btn-priority'>{task.priority}</button>
                        <div className="d-flex gap-2">
                            <Button
                                className='btn-edit' onClick={() => openEdit(task)}
                            >
                                edit
                            </Button>
                            <Button
                                className='btn-del' onClick={() => openDelete(task)} >
                                del
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Task
