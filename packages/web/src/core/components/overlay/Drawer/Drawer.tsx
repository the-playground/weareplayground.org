import * as React from 'react';

import { IOverlayBase } from '../OverlayBase/OverlayBase';

import * as styled from './Drawer.styles';

/**
 * Our drawer is getting its data entirely from context and can therefore
 * be dynamically populated from anywhere in the app.
 *
 * It also handles locking the user's ability to scroll when open.
 */
export const Drawer: React.FC<IDrawer> = ({
    title,
    test,
    isOpen,
    onRequestClose,
    children,
}) => {
    return (
        <styled.Drawer
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            title={title}
        >
            Hello there from a drawer!
        </styled.Drawer>
    );
};

interface IDrawer extends IOverlayBase {
    test?: string;
}
