import React from 'react';
import styled, { css } from 'styled-components';

import {
    elevation as elevationTokens,
    spacing as spacingTokens,
    AvailableComponentSpacing,
    AvailableElevation,
} from '@nerve/core/tokens';

import { Paper } from '../../Paper/Paper.styles';
import { PaperProps } from '../../Paper/Paper.types';

// TYPES
export interface CardProps extends PaperProps {
    layout: 'inline' | 'stacked';
    spacing?: AvailableComponentSpacing;
    elevation?: AvailableElevation;
    withGutter?: true;
}

// STYLES
export const StyledCard = styled(Paper)<CardProps>`
    /* Control card spacing for all elements */
    --card-spacing: ${({ spacing }) =>
        spacing ? spacingTokens.component[spacing] : ''};

    display: flex;
    flex-direction: ${({ layout }) => (layout === 'inline' ? 'row' : 'column')};
    box-shadow: ${({ elevation }) =>
        elevation ? elevationTokens[elevation] : ''};

    ${({ withGutter }) =>
        withGutter &&
        css`
            padding: var(--card-spacing);
        `}
`;

// COMPONENT DEFINITION
export const Card: React.FC<CardProps> = ({
    layout = 'stacked',
    elevation,
    spacing = 'm',
    withGutter,
    children,
    ...rest
}): JSX.Element => {
    return (
        <StyledCard
            layout={layout}
            elevation={elevation}
            spacing={spacing}
            withGutter={withGutter}
            {...rest}
        >
            {children}
        </StyledCard>
    );
};
