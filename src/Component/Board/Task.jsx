import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useModal } from '../../context/ModalContext';

function Task({ task }) {
    const { openEdit, openDelete } = useModal();

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: task.id,
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
    };

    return (
        <Card ref={setNodeRef} style={style} className='my-2 mx-auto' {...listeners} {...attributes}>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>

                <div className="d-flex justify-content-between align-items-center">
                    <button className='btn-priority'>{task.priority}</button>
                    <div className="d-flex gap-2">
                        <Button className='btn-edit' onClick={() => openEdit(task)}>edit</Button>
                        <Button className='btn-del' onClick={() => openDelete(task)}>del</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Task;