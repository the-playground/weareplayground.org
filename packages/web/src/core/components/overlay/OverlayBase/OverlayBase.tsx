import React, { useLayoutEffect } from 'react';
import { AnimatePresence, MotionProps, motion } from 'framer-motion';

import { useOnClickOutside, useScrollFreeze } from '@nerve/shared/hooks';

import { Portal } from '../../utility';

// https://dev.to/spukas/react-portals-flexible-modal-implementation-5310
// https://reactjs.org/docs/portals.html
// https://github.com/reactjs/react-modal/blob/master/src/components/Modal.js
// https://nainacodes.com/blog/create-an-accessible-and-reusable-react-modal
// https://blog.logrocket.com/learn-react-portals-by-example/

export const OverlayBase: React.FC<IOverlayBase> = ({
    className,
    autofocus = true,
    canEscapeKeyClose = true,
    hasBackdrop = true,
    title,
    children,
    isOpen,
    onRequestClose,
    rootAnimation,
    backdropAnimation,
    containerAnimation,
    contentAnimation,
}) => {
    /**
     * Lock scrolling when overlay is open & close the overlay when
     * the user clicks outside of the modal container.
     */
    useScrollFreeze(isOpen);
    const modalContentRef = React.useRef(null);
    useOnClickOutside(modalContentRef, () => onRequestClose);

    return (
        <Portal>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={className}
                        key={title}
                        {...rootAnimation}
                    >
                        {hasBackdrop && (
                            <motion.div
                                className="backdrop"
                                key={`backdrop-${title}`}
                                {...backdropAnimation}
                            />
                        )}
                        <motion.section
                            className="container"
                            key={`container-${title}`}
                            {...containerAnimation}
                        >
                            <motion.div
                                className="content"
                                role="dialog"
                                aria-modal="true"
                                aria-label={title}
                                ref={modalContentRef}
                                key={`content-${title}`}
                                {...contentAnimation}
                            >
                                {children}
                            </motion.div>
                        </motion.section>
                    </motion.div>
                )}
            </AnimatePresence>
        </Portal>
    );
};

export interface IOverlayBase {
    title: string;
    isOpen: boolean;
    onRequestClose: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
    autofocus?: boolean;
    canEscapeKeyClose?: number;
    hasBackdrop?: boolean;
    rootAnimation?: MotionProps;
    backdropAnimation?: MotionProps;
    containerAnimation?: MotionProps;
    contentAnimation?: MotionProps;
}
