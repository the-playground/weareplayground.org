import React from 'react';

// Add your custom event handler code here - record analytics, etc
const clickHandler = (e: React.MouseEvent): void => {
    console.log('ExternalLink.clickHandler:', e);
};

const ExternalLink = React.forwardRef<HTMLAnchorElement, ExternalLinkProps>(
    (props, ref) => {
        const {
            children,
            href,
            target = '_blank',
            rel = 'noopener noreferrer',
            onClick,
            ...rest
        } = props;

        // Create custom logic for handling external link clicks
        const handleOnClick = (
            e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
        ): void => {
            // If the consumer passed in onClick, call it
            if (onClick) {
                onClick(e);
            }

            // Finally, call our defined custom onClick handler
            clickHandler(e);
        };

        return (
            <a
                ref={ref}
                href={href}
                target={target}
                rel={rel}
                onClick={handleOnClick}
                {...rest}
            >
                {children}
            </a>
        );
    }
);

ExternalLink.displayName = 'ExternalLink';

export interface ExternalLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    href: string; // Forces href to be required - see "Gotchas"
    children: React.ReactNode; // Forces children to be required
}
