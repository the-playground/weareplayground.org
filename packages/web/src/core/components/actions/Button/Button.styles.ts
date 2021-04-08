// import styled, { css } from 'styled-components';
import { css } from '@linaria/core';

import { animation, borders, spacing, typography } from '@nerve/core/tokens';

/**
 * Define the amount of scaling happens when an affected button is clicked
 */
const buttonClickScaleAmount = 0.96;

/**
 * `root` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains core styling. sizing, & hover logic
 */
export const root = css`
    align-items: center;
    border-radius: ${borders.defaultRadius};
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    overflow: hidden;
    transition: ${animation.buttonHover};
    width: auto;

    &.--full {
        display: flex;
        width: 100%;
    }

    .start-icon,
    .end-icon {
        position: relative;
        top: 1px;
        transition: ${animation.buttonHover};
    }

    .start-icon {
        margin-right: ${spacing.component.xs};
    }
    .end-icon {
        margin-left: ${spacing.component.xs};
    }

    &.--loading {
        pointer-events: none;
    }

    > .loader {
        line-height: 0;
        flex: 1;
    }

    &:hover {
        &.--icon-hover .start-icon {
            transform: translateX(-3px);
        }

        &.--icon-hover .end-icon {
            transform: translateX(3px);
        }
    }

    &:disabled {
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
    }

    &:active {
        &.--animate-click {
            transform: scale(${buttonClickScaleAmount});
        }
    }
`;

/**
 * Define button size styles at each available button size
 */
export const sizes = {
    s: css`
        /* Custom padding values make button fine-tuning and readability easier -- don't make a habit of this. */
        padding: 4px 12px 5px 12px;
        ${typography.bodyBold.s};
    `,
    m: css`
        /* Custom padding values make button fine-tuning and readability easier -- don't make a habit of this. */
        padding: 11px 16px 12px 16px;
        ${typography.bodyBold.m};
    `,
};

/**
 * Button Variant and Color Definitions
 */
export const fill = {
    primary: css``,
    secondary: css``,
    tertiary: css``,
    danger: css``,
};

export const ghost = {
    primary: css``,
    secondary: css``,
    tertiary: css``,
    danger: css``,
};

export const outline = {
    primary: css``,
    secondary: css``,
    tertiary: css``,
    danger: css``,
};

export const text = {
    primary: css``,
    secondary: css``,
    tertiary: css``,
    danger: css``,
};

export const buttonPalettes = {
    fill,
    ghost,
    outline,
    text,
};

export const getButtonStyles = (variant, color) =>
    buttonPalettes[variant][color];

// export const FillButton = styled(ButtonBase)<FillButtonProps>`
//     border: none;
//     ${({ theme, color }) => css`
//         background-color: ${theme.actions[color].background.default};

//         color: ${theme.actions[color].color.default};

//         &:hover {
//             background-color: ${theme.actions[color].background.hover};
//             color: ${theme.actions[color].color.hover};
//         }

//         &:disabled {
//         }
//     `};
// `;

// export const GhostButton = styled(ButtonBase)<GhostButtonProps>`
//     border: none;
//     background: transparent;
//     ${({ theme, color }) => css`
//         color: ${theme.actions[color].background.default};

//         &:hover {
//             background-color: ${theme.actions[color].background.ghost};
//         }

//         &:disabled {
//         }
//     `};
// `;

// export const OutlineButton = styled(ButtonBase)<OutlineButtonProps>`
//     background: transparent;
//     ${({ theme, color }) => css`
//         border: 1px solid ${theme.actions[color].border.default};
//         color: ${theme.actions[color].border.default};

//         &:hover {
//             background-color: ${theme.actions[color].background.ghost};
//         }

//         &:disabled {
//         }
//     `};
// `;

// export const TextButton = styled(ButtonBase)<TextButtonProps>`
//     background: transparent;
//     padding-left: 0;
//     padding-right: 0;
//     overflow: visible;
//     ${({ theme, color }) => css`
//         color: ${theme.actions[color].background.default};

//         &:hover {
//             opacity: 0.7;
//         }

//         &:disabled {
//         }
//     `};
// `;
