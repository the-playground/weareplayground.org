import styled from 'styled-components';
import { typography } from '@tokens';

import { HeadingStyledProps } from './__types';

export const Heading = styled.p<HeadingStyledProps>`
    text-transform: ${({ textTransform }) => textTransform};
    color: ${({ color, theme }) =>
        color ? theme.typography[color] : 'inherit'};
    ${({ size }) => typography.heading[size!]};
`;
