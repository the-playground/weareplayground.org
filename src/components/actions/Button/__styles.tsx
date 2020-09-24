import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { animation, borders, spacing } from '@tokens';
import { ActionTheme } from '@themes/theme';
import { ButtonProps } from './__types';
import { ButtonBase } from '../ButtonBase';

const ButtonIconBase = styled.div`
    color: currentColor;
    transition: ${animation.buttonHover};
`;

export const StartIcon = styled(ButtonIconBase)``;
export const EndIcon = styled(ButtonIconBase)``;

export const getVariantStyles = (
    variant: ButtonProps['variant'],
    actionTheme: ActionTheme
): FlattenSimpleInterpolation | undefined => {
    if (!variant || !actionTheme) {
        return undefined;
    }

    const styles = {
        fill: css`
            background-color: ${actionTheme.background.default};
            border: none;
            color: ${actionTheme.color.default};

            &:hover {
                background-color: ${actionTheme.background.hover};
                color: ${actionTheme.color.hover};
            }

            &:disabled {
                background-color: ${actionTheme.background.disabled};
                color: ${actionTheme.color.disabled};
            }
        `,
        outline: css`
            background-color: transparent;
            border: 1px solid ${actionTheme.border.default};
            color: ${actionTheme.color.default};
            &:hover {
                background-color: ${actionTheme.background.ghost};
            }
        `,
        ghost: css`
            background-color: transparent;
            border: none;
            color: ${actionTheme.color.default};

            &:hover {
                background-color: ${actionTheme.background.ghost};
            }
        `,
        text: css`
            background-color: transparent;
            border: none;
            color: ${actionTheme.color.default};
        `,
    };

    return styles[variant];
};

export const Button = styled(ButtonBase)<ButtonProps>`
    ${({ variant, theme, color }) =>
        getVariantStyles(variant, theme.actions[color])};
`;
