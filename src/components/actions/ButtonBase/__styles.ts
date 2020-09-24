import styled, { css } from 'styled-components';
import { Link } from '@components/utility';

import { animation, borders, typography } from '@tokens';
import { ButtonBaseProps } from './__types';

// reference -- https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/ButtonBase/ButtonBase.js

/**
 * Define button size styles at each available button size
 *
 * @since 1.0.0
 */
export const buttonSizes = {
    s: css`
        /* Custom padding values make button fine-tuning and readability easier -- don't make a habit of this. */
        padding: 4px 12px 7px 12px;
        ${typography.bodyBold.s};
    `,
    m: css`
        /* Custom padding values make button fine-tuning and readability easier -- don't make a habit of this. */
        padding: 11px 16px 12px 16px;
        ${typography.bodyBold.m};
    `,
};

/**
 * Define the amount of scaling happens when an affected button is clicked
 */
const buttonClickScaleAmount = 0.96;

/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

export const ButtonBase = styled(Link)<ButtonBaseProps>`
    align-items: center;
    border-radius: ${borders.defaultRadius};
    cursor: pointer;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    justify-content: center;
    overflow: hidden;
    transition: ${animation.buttonHover};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    ${(props) => buttonSizes[props.size]}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
    }

    &:active {
        ${({ animateClick }) =>
            animateClick &&
            css`
                transform: scale(${buttonClickScaleAmount});
            `};
    }
`;
