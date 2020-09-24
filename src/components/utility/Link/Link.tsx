import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { isLinkInternal } from '@lib/links';

export const Link: React.FC<LinkProps> = ({
    to,
    activeClassName,
    partiallyActive,
    noNewTab,
    children,
    className,
    ...others
}) => {
    // If the link is internal, render using Gatsby Link
    return isLinkInternal(to) ? (
        <GatsbyLink
            to={to}
            activeClassName={activeClassName}
            partiallyActive={partiallyActive}
            className={className}
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
            className={className}
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
    className?: string;
}
