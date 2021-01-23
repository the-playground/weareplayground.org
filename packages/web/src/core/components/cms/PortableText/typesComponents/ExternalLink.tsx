import React from 'react';

import { Link } from '@nerve/core/routing';

/**
 * Handles rendering external links in a Sanity Block
 * TODO: Improve Types
 */
export const ExternalLink: React.FC<any> = ({ mark, children }) => {
    const { href } = mark;

    return (
        <Link to={href} className="content-link">
            {children}
        </Link>
    );
};
