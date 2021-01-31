import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import cx from 'classnames';

import { useOnClickOutside, useScrollFreeze } from '@nerve/shared/hooks';
import { isSSR } from '@nerve/shared/lib';

const overlayRoot = isSSR ? null : document.getElementById('overlay-root');

// https://dev.to/spukas/react-portals-flexible-modal-implementation-5310
// https://reactjs.org/docs/portals.html

export const OverlayBase: React.FC<IOverlayBase> = ({
    autofocus = true,
    canEscapeKeyClose = true,
    hasBackdrop = true,
    isOpen,
    setIsOpen,
    title,
    children,
}) => {
    // element to which the modal will be rendered
    const container = isSSR ? null : document.createElement('div');

    useScrollFreeze(); // lock scrolling when overlay is open

    // Close the overlay when the user clicks outside of the modal container
    const modalContentRef = React.useRef(null);
    useOnClickOutside(modalContentRef, () => setIsOpen(false));

    useEffect(() => {
        if (overlayRoot && container) {
            // append to root when the children of Modal are mounted
            overlayRoot.appendChild(container);
        }

        // do a cleanup
        return () => {
            if (overlayRoot && container) {
                overlayRoot.removeChild(container);
            }
        };
    }, [container]);

    // TODO: Pass animation configs to motion.div modal component
    return (
        <AnimatePresence>
            {isOpen &&
                createPortal(
                    <div className="modal">
                        {hasBackdrop && <div className="backdrop" />}
                        <section>
                            <div
                                className="content"
                                role="dialog"
                                aria-label={title}
                                ref={modalContentRef}
                            >
                                {/* close button here */}
                                {/* maybe render title here */}
                                {children}
                            </div>
                        </section>
                    </div>,
                    container
                )}
        </AnimatePresence>
    );
};

export interface IOverlayBase {
    autofocus?: boolean;
    canEscapeKeyClose?: number;
    transitionDuration?: number;
    hasBackdrop?: boolean;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
}
