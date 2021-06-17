import React from 'react';

import { Link } from '@web/domains/app';

/**
 * Handles rendering external links in a Sanity Block
 *
 * TODO: Improve Types based on what we expect from Sanity
 */
export const ExternalLink: React.FC<any> = ({ mark, children }) => {
    const { href } = mark;

    return (
        <Link to={href} className="content-link">
            {children}
        </Link>
    );
};
