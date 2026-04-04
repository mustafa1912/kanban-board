import { useState } from 'react';
import { Navbar as BSNavbar, Container, Form, InputGroup, Button, ProgressBar } from 'react-bootstrap'
import { VscAdd } from "react-icons/vsc";
import { FcSearch } from "react-icons/fc";
import TaskModal from './Modal/TaskModal';

function SearchBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <BSNavbar bg="white" className="nav-bar border-bottom shadow-sm sticky-top py-2">
            <Container fluid className="gap-3 flex-wrap">
                {/* Logo */}
                <BSNavbar.Brand href="#" className="d-flex align-items-center gap-2 me-0">
                    <div
                        className="main-icon d-flex align-items-center justify-content-center rounded-2 text-white"  >
                        ⊞
                    </div>
                    <div>
                        <div className="fw-bold title"  >KanbanBoard</div>
                        <div className="text-muted tasks" >  tasks</div>
                    </div>
                </BSNavbar.Brand>
                {/* Progress */}
                <div className="d-flex align-items-center gap-2 bg-light rounded-pill px-3 py-1">
                    <ProgressBar
                        variant="success"

                        className="ProgressBar flex-grow-0"
                    />
                    <span className="fw-bold text-success"> %</span>
                </div>
                {/* Search */}
                <div className='ms-4 search-from'>
                    <InputGroup size="sm">
                        <InputGroup.Text className="bg-white border-end-0 text-muted">
                            <FcSearch />
                        </InputGroup.Text>
                        <Form.Control
                            className="border-start-0 ps-1 " size="lg"
                            placeholder="Search tasks by title or description..."
                        />
                    </InputGroup>
                </div>
                {/* New Task */}
                <Button
                    className="ms-auto fw-bold btn-add-task" onClick={handleShow} >
                    <VscAdd />  New Task
                </Button>
                <TaskModal show={show} onHide={handleClose}></TaskModal>
            </Container>
        </BSNavbar>
    )
}

export default SearchBar
