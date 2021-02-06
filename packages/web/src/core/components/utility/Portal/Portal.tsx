import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PORTAL_ROOT } from '@nerve/shared/constants';
import { isSSR } from '@nerve/shared/lib';

/**
 * A low-level primitive for creating React Portals
 */
export const Portal: React.FC = ({ children }) => {
    const mount = isSSR ? null : document.getElementById(PORTAL_ROOT);
    const element = isSSR ? null : document.createElement('div');

    useEffect(() => {
        if (mount && element) {
            mount.appendChild(element);
        }
        return () => {
            if (mount && element) {
                mount.removeChild(element);
            }
        };
    }, [element, mount]);

    return element ? createPortal(children, element) : null;
};
