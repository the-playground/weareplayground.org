import { useState, ReactElement } from 'react';

/**
 * A handy simple little hook for working with modals.
 */
export const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ModalContent>(null);

    /**
     * Open the modal if it is closed and vice-versa. If content is passed in,
     * it will set the content of the modal.
     *
     * @param content A React element to display in the modal
     */
    const toggleModal = (content: ModalContent = null) => {
        setIsModalOpen(!isModalOpen);
        if (content) {
            setModalContent(content);
        }
    };

    return {
        isModalOpen,
        setIsModalOpen,
        modalContent,
        setModalContent,
        toggleModal,
    };
};

type ModalContent = ReactElement | null;
export type UseModalReturnProps = ReturnType<typeof useModal>;
