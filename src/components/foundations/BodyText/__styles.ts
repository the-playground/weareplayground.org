import styled from 'styled-components';
import { typography } from '@tokens';
import { BodyTextStyledProps } from './__types';

export const BodyText = styled.p<BodyTextStyledProps>`
    color: ${(props) =>
        props.color ? props.theme.typography[props.color] : 'inherit'};
    ${(props) =>
        props.weight === 'regular'
            ? typography.bodyText[props.size!]
            : typography.bodyBold[props.size!]};
`;
