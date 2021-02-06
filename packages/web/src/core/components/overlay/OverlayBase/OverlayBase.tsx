import React, { useLayoutEffect } from 'react';
import { AnimatePresence, MotionProps, motion } from 'framer-motion';

import { useOnClickOutside, useScrollFreeze } from '@nerve/shared/hooks';
import {
    CONTENT_ROOT,
    CONTENT_ROOT_OVERLAY_CLASS,
    PORTAL_ROOT,
} from '@nerve/shared/constants';
import { isSSR } from '@nerve/shared/lib';

import { Portal } from '../../utility';

// https://dev.to/spukas/react-portals-flexible-modal-implementation-5310
// https://reactjs.org/docs/portals.html
// https://github.com/reactjs/react-modal/blob/master/src/components/Modal.js
// https://nainacodes.com/blog/create-an-accessible-and-reusable-react-modal
// https://blog.logrocket.com/learn-react-portals-by-example/

/**
 * A mid-level primitive component that creates a base for other overlay instances
 * to extend. This component handles all of the business logic needed for an overlay
 * to function properly but leaves all content, styling, and animation options up to the consumer.
 */
export const OverlayBase: React.FC<IOverlayBase> = ({
    className,
    autofocus = true,
    canEscapeKeyClose = true,
    hasBackdrop = true,
    title,
    children,
    isOpen,
    onCloseHandler,
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
    useOnClickOutside(modalContentRef, () => onCloseHandler(false));

    /**
     * Handle setting proper attributes on contend and modal roots
     * when the overlay is opened & closed
     */
    const contentRoot = isSSR ? null : document.getElementById(CONTENT_ROOT);
    const portalRoot = isSSR ? null : document.getElementById(PORTAL_ROOT);

    useLayoutEffect(() => {
        if (isOpen && contentRoot && portalRoot) {
            contentRoot.classList.add(CONTENT_ROOT_OVERLAY_CLASS);
            contentRoot.setAttribute('aria-hidden', 'true');
            portalRoot.setAttribute('aria-hidden', 'false');
        }

        return () => {
            if (contentRoot && portalRoot) {
                contentRoot.classList.remove(CONTENT_ROOT_OVERLAY_CLASS);
                contentRoot.setAttribute('aria-hidden', 'false');
                portalRoot.setAttribute('aria-hidden', 'true');
            }
        };
    });

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
    onCloseHandler: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
    autofocus?: boolean;
    canEscapeKeyClose?: number;
    hasBackdrop?: boolean;
    rootAnimation?: MotionProps;
    backdropAnimation?: MotionProps;
    containerAnimation?: MotionProps;
    contentAnimation?: MotionProps;
}
