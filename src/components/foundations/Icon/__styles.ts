import styled, { css } from 'styled-components';
import { iconSizes } from '@tokens';
import { IconProps } from './__types';

const iconThemes = {
    light: css`
        color: var(--iconLight);
    `,
    medium: css`
        color: var(--iconMedium);
    `,
    dark: css`
        color: var(--iconDark);
    `,
    accentA: css`
        color: var(--iconAccentA);
    `,
    default: css`
        color: inherit;
    `,
};

export const Icon = styled.i<IconProps>`
    align-items: center;
    display: flex;
    height: ${(props) => iconSizes[props.size]};
    justify-content: center;
    width: ${(props) => iconSizes[props.size]};
    ${(props) => (props.color ? iconThemes[props.color] : iconThemes.default)};

    > svg {
        height: ${(props) => iconSizes[props.size]};
        width: ${(props) => iconSizes[props.size]};
    }
`;
