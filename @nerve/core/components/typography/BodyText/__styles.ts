import styled from 'styled-components';
import { typography } from '@nerve/core/tokens';
import { BodyTextStyledProps } from './__types';

export const BodyText = styled.p<BodyTextStyledProps>`
    color: ${({ color, theme }) =>
        color ? theme.typography[color] : 'inherit'};
    ${({ weight, size }) =>
        weight === 'regular'
            ? typography.bodyText[size!]
            : typography.bodyBold[size!]};
`;
