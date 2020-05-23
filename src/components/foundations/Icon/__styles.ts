import styled, { css } from 'styled-components';
import { IconProps, AvailableIconSizes } from './__types';

const iconSizes: AvailableIconSizes = {
    xxs: '12px',
    xs: '16px',
    s: '24px',
    m: '32px',
    l: '48px',
    xl: '64px',
};

export const Icon = styled.i<IconProps>`
    align-items: center;
    display: flex;
    height: ${(props) => iconSizes[props.size!]};
    justify-content: center;
    width: ${(props) => iconSizes[props.size!]};

    > svg {
        height: ${(props) => iconSizes[props.size!]};
        width: ${(props) => iconSizes[props.size!]};
    }

    > svg > g {
        fill: ${(props) =>
            props.gradient
                ? css`url(#${props.name}Gradient)`
                : props.theme.icons[props.color!]};
    }
`;
