import * as React from 'react';

import { useOnClickOutside, useScrollFreeze } from '@nerve/shared/hooks';
import { useUIContext } from '@nerve/shared/context';

import * as styled from './Modal.styles';

/**
 * Our modal is getting its data entirely from context and can therefore
 * be dynamically populated from anywhere in the app.
 *
 * It also handles locking the user's ability to scroll when open.
 */
export const Modal: React.FC = () => {
    const { modal } = useUIContext();
    useScrollFreeze(); // lock scrolling

    // Close the modal when the user clicks outside of the modal container
    const modalContentRef = React.useRef(null);
    useOnClickOutside(modalContentRef, () => modal.setIsOpen(false));

    return (
        <styled.Modal>
            <div className="backdrop" />
            <section>
                <div
                    className="content"
                    role="dialog"
                    aria-label={modal.label}
                    ref={modalContentRef}
                >
                    {/* Close Button Here */}
                    {modal.content}
                </div>
            </section>
        </styled.Modal>
    );
};
