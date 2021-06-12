import styled, { css } from 'styled-components';

import { elevation as elevationTokens, spacing } from '@nerve/core/tokens';
import { Paper } from '../../../Paper/Paper.styles';
import { CardProps } from './Card.types';

export const Card = styled(Paper)<CardProps>`
    display: flex;
    flex-direction: ${({ layout }) => (layout === 'inline' ? 'row' : 'column')};
    padding: ${({ gutter }) => (gutter ? spacing.component[gutter] : '')};
    box-shadow: ${({ elevation }) =>
        elevation ? elevationTokens[elevation] : ''};
`;
