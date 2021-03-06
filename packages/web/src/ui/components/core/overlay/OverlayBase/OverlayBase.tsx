import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import { AnimatePresence, MotionProps, motion } from 'framer-motion';
import FocusTrap from 'focus-trap-react';

import {
    CONTENT_ROOT,
    CONTENT_ROOT_OVERLAY_CLASS,
    PORTAL_ROOT,
} from '@web/shared/constants';

import { useOnClickOutside, useScrollFreeze } from '@web/shared/hooks';
import { isSSR } from '@web/shared/utils';

import { Portal } from '../../_utility';

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
    header,
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
     * Close the modal when the escape key is pressed
     */
    const onKeyDown = (event: KeyboardEvent) => {
        if (
            canEscapeKeyClose &&
            (event.key === 'Escape' || event.key === 'Esc')
        ) {
            onCloseHandler(false);
        }
    };

    /**
     * Handle setting proper attributes on contend and modal roots
     * when the overlay is opened & closed.
     * * Note: We don't want to fetch portal elements on each render so
     * * we use `useMemo`.
     */
    const contentRoot = isSSR
        ? null
        : useMemo(() => document.getElementById(CONTENT_ROOT), []);
    const portalRoot = isSSR
        ? null
        : useMemo(() => document.getElementById(PORTAL_ROOT), []);

    useEffect(() => {
        if (isOpen && canEscapeKeyClose) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    });

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
            {/* Allow all aspects of the modal to be animated on mount/unmount */}
            <AnimatePresence>
                {isOpen && (
                    // Autofocus the modal as soon as it mounts
                    <FocusTrap>
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
                                    {header && <header>{header}</header>}
                                    <div className="body">{children}</div>
                                </motion.div>
                            </motion.section>
                        </motion.div>
                    </FocusTrap>
                )}
            </AnimatePresence>
        </Portal>
    );
};

export interface IOverlayBase {
    title: string;
    header?: JSX.Element;
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
