import * as React from 'react';

import { IOverlayBase } from '../OverlayBase/OverlayBase';

import * as styled from './Drawer.styles';

/**
 *
 */
export const Drawer: React.FC<IDrawer> = ({ test, children, ...props }) => {
    return (
        <styled.Drawer {...props}>
            {/* Close button goes here */}
            {/* Optional header goes here */}
            {children}
        </styled.Drawer>
    );
};

interface IDrawer extends IOverlayBase {
    test?: string;
}
