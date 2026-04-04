import React, { useState } from 'react';
import Board from '../Component/Board/Board'
import SearchBar from '../Component/SearchBar'
import TaskModal from '../Component/Modal/TaskModal'

import { useModal } from '../context/ModalContext';


const Home = () => {
    const { show, closeModal, selectedTask } = useModal();
    return (
        <React.Fragment>
            <SearchBar />
            <Board />
            <TaskModal
                show={show}
                task={selectedTask}
                onHide={closeModal}
            />
        </React.Fragment>
    )
}

export default Home
