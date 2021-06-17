import * as React from 'react';

import { IModal } from './Modal.d';
import * as styled from './Modal.styles';

/**
 *
 */
export const Modal: React.FC<IModal> = ({
    containerSize = 'm',
    onCloseHandler,
    children,
    ...props
}) => {
    return (
        <styled.Modal
            containerSize={containerSize}
            onCloseHandler={onCloseHandler}
            rootAnimation={{
                transition: { duration: 0.3 },
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
            }}
            {...props}
        >
            {children}
        </styled.Modal>
    );
};
