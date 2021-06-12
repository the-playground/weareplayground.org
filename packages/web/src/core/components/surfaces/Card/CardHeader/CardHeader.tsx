import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, AvailableComponentSpacing } from '@nerve/core/tokens';

// TYPES
export interface CardHeaderProps {
    title: '';
    subtitle: '';
    action?: '';
    icon?: '';
    verticalSpacing?: AvailableComponentSpacing;
    disableSpacing?: true;
}

// STYLES
export const StyledCardContent = styled.div<CardHeaderProps>`
    --card-header-y-gutter: var(--card-spacing);
    --card-header-x-gutter: var(--card-spacing);

    align-items: center;
    display: flex;

    ${({ verticalSpacing }) =>
        verticalSpacing &&
        css`
            --card-header-y-gutter: ${spacing.component[verticalSpacing!]};
        `};

    ${({ disableSpacing }) =>
        !disableSpacing &&
        css`
            padding: var(--card-header-y-gutter) var(--card-header-x-gutter);
        `};
`;

// COMPONENT DEFINITION
export const CardContent: React.FC<CardHeaderProps> = ({
    verticalSpacing,
    disableSpacing,
    children,
}) => (
    <StyledCardContent
        verticalSpacing={verticalSpacing}
        disableSpacing={disableSpacing}
    >
        {children}
    </StyledCardContent>
);
