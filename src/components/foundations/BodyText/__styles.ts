import styled from 'styled-components';
import { typography } from '@tokens';
import { BodyTextProps } from './__types';

export const BodyText = styled.p<Omit<BodyTextProps, 'tag'>>`
    color: ${(props) =>
        props.color ? props.theme.typography[props.color] : 'inherit'};
    ${(props) =>
        props.weight === 'regular'
            ? typography.bodyText[props.size!]
            : typography.bodyBold[props.size!]};
`;
