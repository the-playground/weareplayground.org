import React from 'react';
import styled, { css } from 'styled-components';

import {
    elevation as elevationTokens,
    spacing as spacingTokens,
    AvailableComponentSpacing,
    AvailableElevation,
} from '@web/ui/tokens';

import { Paper } from '../../surfaces/Paper/Paper.styles';
import { PaperProps } from '../../surfaces/Paper/Paper.types';

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

// Export composable Card components
export * from './CardActionArea/CardActionArea';
export * from './CardHeader/CardHeader';
export * from './CardActions/CardActions';
export * from './CardContent/CardContent';
export * from './CardMedia/CardMedia';
