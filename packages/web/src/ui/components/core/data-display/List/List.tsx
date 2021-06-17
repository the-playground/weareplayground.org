import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, AvailableComponentSpacing } from '@web/ui/tokens';

// TYPES
export interface ListProps {
    className?: string;
    heading?: JSX.Element;
    gutter?: AvailableComponentSpacing;
    itemSpacing?: AvailableComponentSpacing;
    iconSpacing?: AvailableComponentSpacing;
    headingSpacing?: AvailableComponentSpacing;
    disablePadding?: true;
    as?: 'ol' | 'ul';
}

// STYLES
export const StyledList = styled.ul<ListProps>`
    ${({ itemSpacing, headingSpacing, iconSpacing, gutter }) => css`
        --list-gutter: ${gutter ? spacing.component[gutter!] : '0px'};
        --list-item-spacing: ${spacing.component[itemSpacing!]};
        --list-item-icon-spacing: ${spacing.component[iconSpacing!]};
        --list-heading-spacing: ${spacing.component[headingSpacing!]};
    `}

    display: flex;
    flex-direction: column;
    list-style: none;

    .heading {
        padding: var(--list-heading-spacing) var(--list-gutter);
    }
`;

// COMPONENT DEFINITION
export const List: React.FC<ListProps> = ({
    className,
    heading,
    gutter,
    itemSpacing = 'm',
    iconSpacing = 's',
    headingSpacing = 's',
    disablePadding,
    children,
    as,
}) => {
    return (
        <StyledList
            className={className}
            gutter={gutter}
            itemSpacing={itemSpacing}
            headingSpacing={headingSpacing}
            iconSpacing={iconSpacing}
            disablePadding={disablePadding}
            as={as}
        >
            {heading && <div className="heading">{heading}</div>}
            {children}
        </StyledList>
    );
};

export * from './ListItem/ListItem';
export * from './ListItemAction/ListItemAction';
