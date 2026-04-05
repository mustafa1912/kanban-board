import React, { useState } from 'react';
import Board from '../Component/Board/Board'
import SearchBar from '../Component/NavhBar'
import TaskModal from '../Component/Modal/TaskModal'
import DeleteModal from '../Component/Modal/DeletModal';

import { useModal } from '../context/ModalContext';


const Home = () => {
    const { modalType, closeModal, selectedTask } = useModal();

    return (
        <React.Fragment>
            <SearchBar />
            <Board />
            {modalType === 'edit' && (
                <TaskModal
                    show={true}
                    task={selectedTask}
                    onHide={closeModal}
                />
            )}
            {modalType === 'delete' && (
                <DeleteModal
                    show={modalType === "delete"}
                    task={selectedTask}
                    onHide={closeModal}
                />
            )}
        </React.Fragment>
    )
}

export default Home
