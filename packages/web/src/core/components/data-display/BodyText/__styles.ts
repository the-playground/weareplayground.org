import styled from 'styled-components';
import { typography } from '@web/core/tokens';
import { BodyTextProps } from './__types';

export const BodyText = styled.p<BodyTextProps>`
    color: ${({ color, theme }) =>
        color ? theme.typography[color] : 'inherit'};
    ${({ weight, size }) =>
        weight === 'regular'
            ? typography.bodyText[size]
            : typography.bodyBold[size]};
`;
