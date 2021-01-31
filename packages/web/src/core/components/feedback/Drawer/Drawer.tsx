import * as React from 'react';

import { useOnClickOutside, useScrollFreeze } from '@nerve/shared/hooks';
import { useUIContext } from '@nerve/shared/context';

import * as styled from './Drawer.styles';

/**
 * Our drawer is getting its data entirely from context and can therefore
 * be dynamically populated from anywhere in the app.
 *
 * It also handles locking the user's ability to scroll when open.
 */
export const Drawer: React.FC = () => {
    const { drawer } = useUIContext();
    useScrollFreeze(); // lock scrolling

    // Close the drawer when the user clicks outside of the drawer content
    const drawerContentRef = React.useRef(null);
    useOnClickOutside(drawerContentRef, () => drawer.setIsOpen(false));

    return (
        <styled.Drawer>
            <div className="backdrop" />
            <section>
                <div
                    className="content"
                    role="dialog"
                    aria-label={drawer.label}
                    ref={drawerContentRef}
                >
                    {drawer.content}
                </div>
            </section>
        </styled.Drawer>
    );
};
