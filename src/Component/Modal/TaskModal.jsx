import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function TaskModal({ show, onHide }) {

    return (
        <Modal show={show} onHide={onHide} centered size="md" animation>
            <Modal.Header closeButton className="border-0 pb-0">
                <Modal.Title className="fw-bold" style={{ fontSize: 17 }}>
                    {/* {task?.id ? '✏️ Edit Task' : '✨ New Task'} */}
                </Modal.Title>
            </Modal.Header>
            <Form  >
                <Modal.Body className="pt-2">
                    {/* Title */}
                    <Form.Group className="mb-3">
                        <Form.Label className="text-muted fw-bold text-uppercase" style={{ fontSize: 12, letterSpacing: '0.06em' }}>
                            Title *
                        </Form.Label>
                        <Form.Control
                            autoFocus
                            placeholder="What needs to be done?"

                        />
                        <Form.Control.Feedback type="invalid"> </Form.Control.Feedback>
                    </Form.Group>
                    {/* Description */}
                    <Form.Group className="mb-3">
                        <Form.Label className="text-muted fw-bold text-uppercase" style={{ fontSize: 12, letterSpacing: '0.06em' }}>
                            Description
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Add more details..."

                        />
                    </Form.Group>
                    {/* Column + Priority */}
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label className="text-muted fw-bold text-uppercase" style={{ fontSize: 12, letterSpacing: '0.06em' }}>
                                    Column
                                </Form.Label>
                                <Form.Select


                                >
                                    {/* {COLUMNS.map(c => (
                                        <option key={c.id} value={c.id}>{c.label}</option>
                                    ))} */}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label className="text-muted fw-bold text-uppercase" style={{ fontSize: 12, letterSpacing: '0.06em' }}>
                                    Priority
                                </Form.Label>
                                <Form.Select


                                >
                                    <option value="high">🔴 High</option>
                                    <option value="medium">🟡 Medium</option>
                                    <option value="low">🟢 Low</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                </Modal.Body>

                <Modal.Footer className="border-0 pt-0">
                    <Button variant="light"  >Cancel</Button>
                    <Button
                        type="submit"
                        style={{
                            background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                            border: 'none',
                            boxShadow: '0 4px 12px rgba(99,122,241,.3)',
                        }}
                    >
                        {/* {task?.id ? 'Save Changes' : 'Add Task'} */}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default TaskModal
