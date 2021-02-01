import * as React from 'react';

import { IOverlayBase } from '../OverlayBase/OverlayBase';

import * as styled from './Modal.styles';

/**
 * Our modal is getting its data entirely from context and can therefore
 * be dynamically populated from anywhere in the app.
 *
 * It also handles locking the user's ability to scroll when open.
 */
export const Modal: React.FC<IModal> = ({
    title,
    test,
    isOpen,
    onRequestClose,
    children,
}) => {
    return (
        <styled.Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            title={title}
        >
            {children}
        </styled.Modal>
    );
};

interface IModal extends IOverlayBase {
    test?: string;
}
