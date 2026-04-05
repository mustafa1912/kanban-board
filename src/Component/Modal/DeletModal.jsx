import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { UseDeleteTask } from '../../Hooks/UseDeleteTask';

function DeleteModal({ show, onHide, task }) {
    const { mutate: deleteTask, isPending } = UseDeleteTask();

    const handleDelete = () => {
        if (!task?.id) return;
        deleteTask(task.id, {
            onSuccess: () => onHide(),
        });
    };

    return (
        <Modal centered show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>🗑️ Delete Task</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>
                    Are you sure you want to delete
                    <strong className='text-danger'> {task?.title} </strong>?
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="light" onClick={onHide} disabled={isPending}>
                    Cancel
                </Button>

                <Button variant="danger" onClick={handleDelete} disabled={isPending}>
                    {isPending ? 'Deleting...' : 'Delete'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;