import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const openModal = (task = null) => {
        setSelectedTask(task);
        setShow(true);
    };

    const closeModal = () => {
        setSelectedTask(null);
        setShow(false);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal, show, selectedTask }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);