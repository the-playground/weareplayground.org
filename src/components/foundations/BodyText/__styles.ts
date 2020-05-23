import styled from 'styled-components';
import { typography } from '@tokens';
import { BodyTextProps } from './__types';

export const BodyText = styled.p<Omit<BodyTextProps, 'tag'>>`
    color: ${(props) => props.theme.typography[props.color!]};
    ${(props) => typography.body[props.size!]};
`;
