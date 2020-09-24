import styled, { css } from 'styled-components';

import { animation, borders, spacing } from '@tokens';
import { ButtonProps } from './__types';
import { ButtonBase } from '../ButtonBase/ButtonBase';

const ButtonIconBase = styled.div`
    color: currentColor;
    transition: ${animation.buttonHover};
`;

export const StartIcon = styled(ButtonIconBase)``;
export const EndIcon = styled(ButtonIconBase)``;

/**
 * Define button size styles at each available button size
 *
 * @since 1.0.0
 */
export const buttonSizes = {
    s: css`
        ${StartIcon} {
            margin-right: ${spacing.component.s};
        }
        ${EndIcon} {
            margin-left: ${spacing.component.s};
        }
    `,
    m: css`
        ${StartIcon} {
            margin-right: ${spacing.component.xs};
        }
        ${EndIcon} {
            margin-left: ${spacing.component.xs};
        }
    `,
};

export const Button = styled(ButtonBase)<ButtonProps>`
    border: none;
    /* Themeable properties */
    background-color: ${(props) =>
        props.theme.actions[props.color].background.default};
    color: ${(props) => props.theme.actions[props.color].color.default};

    &:hover {
        background-color: ${(props) =>
            props.theme.actions[props.color].background.hover};
        color: ${(props) => props.theme.actions[props.color].color.hover};

        ${StartIcon} {
            transform: translateX(-3px);
        }
        ${EndIcon} {
            transform: translateX(3px);
        }
    }

    &:disabled {
        background-color: ${(props) =>
            props.theme.actions[props.color].background.disabled};
        color: ${(props) => props.theme.actions[props.color].color.disabled};
    }
`;
