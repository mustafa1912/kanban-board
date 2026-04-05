import { useActionState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { CreateTask, UpdateTask } from '../../services/TaskApi';
import SubmitButton from './SubmitButton';
import { useModal } from '../../context/ModalContext';

const COLS = [
    { id: 'backlog', label: 'Backlog' },
    { id: 'in_progress', label: 'In Progress' },
    { id: 'in_review', label: 'In Review' },
    { id: 'done', label: 'Done' },
];

function TaskModal({ onHide, task = null }) {
    const queryClient = useQueryClient();
    const { show } = useModal(); 

    const isEdit = !!task?.id;

    const action = async (prevState, formData) => {
        const data = {
            title: formData.get('title'),
            description: formData.get('description'),
            column: formData.get('column'),
            priority: formData.get('priority'),
        };

        try {
            if (isEdit) {
                await UpdateTask(task.id, data);
            } else {
                await CreateTask(data);
            }
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            onHide();
            return { error: null };
        } catch (err) {
            return { error: 'Something went wrong, try again.' };
        }
    };

    const [state, formAction] = useActionState(action, { error: null });

    return (
        <Modal show={show} onHide={onHide} centered size="md" animation>
            <Modal.Header closeButton className="border-0 pb-0">
                <Modal.Title className="fw-bold" style={{ fontSize: 17 }}>
                    {isEdit ? '✏️ Edit Task' : '✨ New Task'}
                </Modal.Title>
            </Modal.Header>

            <Form action={formAction}>
                <Modal.Body className="pt-2">

                    {state.error && (
                        <div className="alert alert-danger py-2">{state.error}</div>
                    )}

                    <Form.Group className="mb-3">
                        <Form.Label className="text-muted fw-bold text-uppercase" style={{ fontSize: 12 }}>
                            Title *
                        </Form.Label>
                        <Form.Control
                            name="title"
                            defaultValue={task?.title || ''}
                            placeholder="What needs to be done?"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="text-muted fw-bold text-uppercase" style={{ fontSize: 12 }}>
                            Description
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            defaultValue={task?.description || ''}
                            placeholder="Add more details..."
                        />
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label className="text-muted fw-bold text-uppercase" style={{ fontSize: 12 }}>
                                    Column
                                </Form.Label>
                                <Form.Select name="column" defaultValue={task?.column || 'backlog'}>
                                    {COLS.map(c => (
                                        <option key={c.id} value={c.id}>{c.label}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label className="text-muted fw-bold text-uppercase" style={{ fontSize: 12 }}>
                                    Priority
                                </Form.Label>
                                <Form.Select name="priority" defaultValue={task?.priority || 'medium'}>
                                    <option value="high">🔴 High</option>
                                    <option value="medium">🟡 Medium</option>
                                    <option value="low">🟢 Low</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="border-0 pt-0">
                    <Button variant="light" onClick={onHide}>Cancel</Button>
                    <SubmitButton isEdit={isEdit} />
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default TaskModal;