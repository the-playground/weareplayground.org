import * as React from 'react';

import { IOverlayBase } from '../OverlayBase/OverlayBase';

import * as styled from './Modal.styles';

/**
 *
 */
export const Modal: React.FC<IModal> = ({ test, children, ...props }) => {
    return (
        <styled.Modal {...props}>
            {/* Close button goes here */}
            {/* Optiomal header goes here */}
            {children}
        </styled.Modal>
    );
};

interface IModal extends IOverlayBase {
    test?: string;
}
