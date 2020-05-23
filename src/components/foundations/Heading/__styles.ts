import styled from 'styled-components';
import { typography } from '@tokens';

import { HeadingProps } from './__types';

export const Heading = styled.p<Omit<HeadingProps, 'tag'>>`
    color: ${(props) => props.theme.typography[props.color!]};
    ${(props) => typography.heading[props.size!]};
`;
