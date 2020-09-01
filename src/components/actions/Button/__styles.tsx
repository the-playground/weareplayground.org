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

    /* Themeable properties */
    background-color: ${(props) =>
        props.theme.actions[props.color].background.default};
    color: ${(props) => props.theme.actions[props.color].color.default};

    &:hover {
        background-color: ${(props) =>
            props.theme.actions[props.color].background.hover};
        color: ${(props) => props.theme.actions[props.color].color.hover};
    }

    &:disabled {
        background-color: ${(props) =>
            props.theme.actions[props.color].background.disabled};
        color: ${(props) => props.theme.actions[props.color].color.disabled};
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
    }

    /* Set Themeable Properties */
    ${(props) => buttonSizes[props.size]}
`;
