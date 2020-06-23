import styled, { css } from 'styled-components';
import { typography } from '@tokens';
import { BodyTextProps } from './__types';

const colors = {
    light: css`
        color: var(--typeLight);
    `,
    medium: css`
        color: var(--typeMedium);
    `,
    dark: css`
        color: var(--typeDark);
    `,
    accent: css`
        color: var(--typeAccent);
    `,
    inherit: css`
        color: inherit;
    `,
};

export const BodyText = styled.p<Omit<BodyTextProps, 'tag'>>`
    ${(props) => (props.color ? colors[props.color] : colors.inherit)};
    ${(props) =>
        props.weight === 'regular'
            ? typography.bodyText[props.size!]
            : typography.bodyBold[props.size!]};
`;
