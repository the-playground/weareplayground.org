import React from 'react';
import classnames from 'classnames';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';

export const InternalLink = React.forwardRef<
    HTMLAnchorElement,
    InternalLinkProps
>((props, ref) => {
    const { className, children, href, passHref, ...rest } = props;
    const router = useRouter();
    const classes = classnames(
        {
            // Add a "selected" class to the currently active page link
            '--selected': router.pathname === href,
        },
        className
    );

    return (
        <NextLink {...{ href }} passHref>
            <a className={classes} ref={ref} {...rest}>
                {children}
            </a>
        </NextLink>
    );
});

InternalLink.displayName = 'InternalLink';

// Note: 'as' is deprecated in the next.js link component & we will not be using it -- no reason to expose it as a prop.
export type InternalLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
    Omit<NextLinkProps, 'as'>;
