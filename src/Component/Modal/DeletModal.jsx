import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({ show, onHide, task, onConfirm }) {
    const handleDelete = () => {
        // onConfirm(task.id);
        onHide();
    };

    return (
        <Modal centered show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>🗑️ Delete Task</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>
                    Are you sure you want to delete it
                    <strong className='text-danger'> {task?.title} </strong> ?
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="light" onClick={onHide}>
                    Cancel
                </Button>

                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;