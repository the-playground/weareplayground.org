import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, AvailableComponentSpacing } from '@web/ui/tokens';

// TYPES
export interface CardActionsProps {
    disableSpacing?: true;
    itemSpacing?: AvailableComponentSpacing;
}

// STYLES
export const StyledCardActions = styled.div<CardActionsProps>`
    align-items: center;
    display: flex;
    ${({ disableSpacing }) =>
        !disableSpacing &&
        css`
            padding: var(--card-spacing);
        `}

    > :not(:first-child) {
        margin-left: ${({ itemSpacing }) => spacing.component[itemSpacing!]};
    }
`;

// COMPONENT DEFINITION
export const CardActions: React.FC<CardActionsProps> = ({
    disableSpacing,
    itemSpacing = 'm',
    children,
}) => (
    <StyledCardActions
        itemSpacing={itemSpacing}
        disableSpacing={disableSpacing}
    >
        {children}
    </StyledCardActions>
);
