import React from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export const InternalLink = React.forwardRef<
    HTMLAnchorElement,
    InternalLinkProps
>((props, ref) => {
    const { children, href, passHref, ...rest } = props;

    return (
        <NextLink {...{ href }} passHref>
            <a ref={ref} {...rest}>
                {children}
            </a>
        </NextLink>
    );
});

InternalLink.displayName = 'InternalLink';

// Note: 'as' is deprecated in the next.js link component & we will not be using it -- no reason to expose it as a prop.
export type InternalLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
    Omit<NextLinkProps, 'as'>;
