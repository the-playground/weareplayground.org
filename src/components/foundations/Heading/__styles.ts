import styled from 'styled-components';
import { typography } from '@tokens';

import { HeadingStyledProps } from './__types';

export const Heading = styled.p<HeadingStyledProps>`
    text-transform: ${(props) => props.textTransform};
    color: ${(props) =>
        props.color ? props.theme.typography[props.color] : 'inherit'};
    ${(props) => typography.heading[props.size!]};
`;
