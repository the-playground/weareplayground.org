import styled, { css } from 'styled-components';
import { LinkHandler } from '@components/utility';

import { animation, borders, spacing, typography } from '@tokens';
import { ButtonProps } from './__types';

/**
 * Define button size styles at each available button size
 *
 * @since 1.0.0
 */
export const buttonSizes = {
    s: css`
        padding: ${spacing.component.xs} ${spacing.component.m} 11px
            ${spacing.component.m};
        font-weight: 700;
    `,
    m: css`
        padding: 11px ${spacing.component.m} ${spacing.component.s}
            ${spacing.component.m};
        font-weight: 700;
    `,
};

const buttonThemes = {
    primary: css`
        background-color: var(--actionPrimaryBG);
        color: var(--actionPrimaryColor);

        &:hover {
            background-color: var(--actionPrimaryBG-Hover);
        }

        &:active {
        }

        &:disabled {
        }
    `,
    secondary: css`
        background-color: var(--actionSecondaryBG);
        color: var(--actionSecondaryColor);

        &:hover {
            background-color: var(--actionSecondaryBG-Hover);
        }

        &:active {
        }

        &:disabled {
        }
    `,
    tertiary: css`
        background-color: var(--actionTertiaryBG);
        color: var(--actionTertiaryColor);

        &:hover {
            background-color: var(--actionTertiaryBG-Hover);
        }

        &:active {
        }

        &:disabled {
        }
    `,
};

export const Button = styled(LinkHandler)<ButtonProps>`
    align-items: center;
    border-radius: ${borders.defaultRadius};
    border: none;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    overflow: hidden;
    transition: ${animation.buttonHover};
    width: auto;
    ${typography.bodyText.m}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
    }

    /* Set Themeable Properties */
    ${(props) => buttonThemes[props.type]}
    ${(props) => buttonSizes[props.size]}
`;
