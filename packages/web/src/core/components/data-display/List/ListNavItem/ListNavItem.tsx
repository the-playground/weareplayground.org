import React from 'react';
import styled from 'styled-components';

import { spacing } from '@nerve/core/tokens';

export const StyledListNavItem = styled.li`
    align-items: center;
    display: flex;

    a,
    button,
    div {
        align-items: center;
        display: flex;
        width: 100%;
        overflow: hidden;
        padding: var(--list-item-spacing) var(--list-item-gutter);
    }

    i {
        margin-right: var(--list-item-icon-spacing);
    }

    a:hover,
    button:hover {
        background-color: ${({ theme }) =>
            theme.actions.tertiary.background.hover};
    }
`;

export const ListNavItem: React.FC<ListNavItemProps> = ({
    className,
    children,
}) => {
    return (
        <StyledListNavItem className={className}>{children}</StyledListNavItem>
    );
};

export interface ListNavItemProps {
    className?: string;
}
