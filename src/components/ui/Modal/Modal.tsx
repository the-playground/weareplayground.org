import * as React from 'react';
import { motion } from 'framer-motion';

import { useOnClickOutside, useScrollFreeze } from '@hooks';
import { useModalState } from '@state';

import * as styled from './__styles';

/**
 * Our modal is getting its data entirely from context and can therefore
 * be dynamically populated from anywhere in the app.
 *
 * It also handles locking the user's ability to scroll when open.
 */
export const Modal: React.FC = () => {
    const modal = useModalState();
    useScrollFreeze(); // lock scrolling

    // Close the modal when the user clicks outside of the modal container
    const modalContainerRef = React.useRef(null);
    useOnClickOutside(modalContainerRef, () => modal.setIsModalOpen(false));

    return (
        <motion.div
            key="modal"
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <styled.Modal isOpen={modal.isModalOpen}>
                <styled.ModalContainer ref={modalContainerRef}>
                    <styled.ModalContent>
                        {modal.modalContent}
                    </styled.ModalContent>
                </styled.ModalContainer>
            </styled.Modal>
        </motion.div>
    );
};
