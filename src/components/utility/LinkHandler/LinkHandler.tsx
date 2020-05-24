import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { isLinkInternal } from '@lib/links';

export const LinkHandler: React.FC<LinkProps> = ({
    to,
    activeClassName,
    partiallyActive,
    noNewTab,
    children,
    ...others
}) => {
    // If the link is internal, render using Gatsby Link

    return isLinkInternal(to) ? (
        <GatsbyLink
            to={to}
            activeClassName={activeClassName}
            partiallyActive={partiallyActive}
            {...others}
        >
            {children}
        </GatsbyLink>
    ) : (
        // If the link is external, render using standard link
        <a
            href={to}
            target={noNewTab ? '_self' : '_blank'}
            rel={noNewTab ? '' : 'noopener noreferrer'}
            {...others}
        >
            {children}
        </a>
    );
};

export interface LinkProps {
    to: string;
    activeClassName?: string;
    partiallyActive?: boolean;
    noNewTab?: true;
}
