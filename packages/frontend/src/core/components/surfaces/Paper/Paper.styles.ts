import styled from 'styled-components';
import { borders } from '@nerve/core/tokens';
import { PaperProps } from './Paper.d';

export const Paper = styled.div<PaperProps>`
    background-color: ${({ theme, bgColor }) =>
        bgColor ? theme.surfaces[bgColor] : theme.surfaces.paper};
    border-radius: ${borders.defaultRadius};
    ${({ variant, borderColor, theme }) =>
        variant === 'outlined' &&
        borderColor &&
        `
        border: 1px solid ${theme.surfaces[borderColor]};
    `};
`;
