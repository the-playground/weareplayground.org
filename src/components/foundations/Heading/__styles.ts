import styled, { css } from 'styled-components';
import { typography } from '@tokens';

import { HeadingProps } from './__types';

const colors = {
    light: css`
        color: var(--typeLight);
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

export const Heading = styled.p<Omit<HeadingProps, 'tag'>>`
    ${(props) => (props.color ? colors[props.color] : colors.inherit)};
    ${(props) => typography.heading[props.size!]};
`;
