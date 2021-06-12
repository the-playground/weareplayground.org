import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, AvailableComponentSpacing } from '@nerve/core/tokens';

// TYPES
export interface CardActionProps {
    disableSpacing?: true;
    itemSpacing?: AvailableComponentSpacing;
}

// STYLES
export const StyledCardActions = styled.div<CardActionProps>`
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
export const CardActions: React.FC<CardActionProps> = ({
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
