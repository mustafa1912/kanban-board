import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [modalType, setModalType] = useState(null); 

    const openEdit = (task) => {
        setSelectedTask(task);
        setModalType("edit");
        setShow(true);
    };

    const openDelete = (task) => {
        setSelectedTask(task);
        setModalType("delete");
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
        setSelectedTask(null);
        setModalType(null);
    };

    return (
        <ModalContext.Provider value={{
            openEdit,
            openDelete,
            closeModal,
            show,
            selectedTask,
            modalType,
        }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);