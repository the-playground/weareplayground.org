import styled from 'styled-components';
import { typography } from '@web/core/tokens';

import { HeadingProps } from './__types';

export const Heading = styled.p<HeadingProps>`
    text-transform: ${({ textTransform }) => textTransform};
    color: ${({ color, theme }) =>
        color ? theme.typography[color] : 'inherit'};
    ${({ size }) => typography.heading[size]};
`;
