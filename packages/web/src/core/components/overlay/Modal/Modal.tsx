import * as React from 'react';

import { IModal } from './Modal.d';
import * as styled from './Modal.styles';

/**
 *
 */
export const Modal: React.FC<IModal> = ({
    containerSize = 'm',
    children,
    ...props
}) => {
    return (
        <styled.Modal containerSize={containerSize} {...props}>
            {/* Close button goes here */}
            {/* Optiomal header goes here */}
            {children}
        </styled.Modal>
    );
};
