/**
 * Design Tokens » Typography » Typography
 *
 * Pulls together our fonts and font size tokens into an easy to implement
 * set of style definitions that drive all the typographic styles across the site.
 *
 * @uses fonts to pull in the desired fonts for each definition
 * @uses fontSizes to implement our type scale
 * @since 1.0.0
 */

import { css } from 'styled-components';

import { fonts } from './fonts';
import { fontSizes } from './typeScale';

export const typography = {
    // BodyText
    bodyText: {
        XLarge: css`
            ${fonts.bodyText};
            ${fontSizes.size3};
        `,
        Large: css`
            ${fonts.bodyText};
            ${fontSizes.size2};
        `,
        Medium: css`
            ${fonts.bodyText};
            ${fontSizes.size1};
        `,
        Small: css`
            ${fonts.bodyText};
            ${fontSizes.size0};
        `,
    },

    // Body » Bold
    bodyBold: {
        XLarge: css`
            ${fonts.bodyBold};
            ${fontSizes.size3};
        `,
        Large: css`
            ${fonts.bodyBold};
            ${fontSizes.size2};
        `,
        Medium: css`
            ${fonts.bodyBold};
            ${fontSizes.size1};
        `,
        Small: css`
            ${fonts.bodyBold};
            ${fontSizes.size0};
        `,
    },

    // Body » Title
    bodyTitle: {
        Large: css`
            ${fonts.bodyBold};
            ${fontSizes.size2};
            text-transform: uppercase;
        `,
        Medium: css`
            ${fonts.bodyBold};
            ${fontSizes.size1};
            text-transform: uppercase;
        `,
        Small: css`
            ${fonts.bodyBold};
            ${fontSizes.size0};
            text-transform: uppercase;
        `,
    },

    // Heading » Standard
    heading: {
        XLarge: css`
            ${fonts.heading};
            ${fontSizes.size7};
        `,
        Large: css`
            ${fonts.heading};
            ${fontSizes.size7};
        `,
        Medium: css`
            ${fonts.heading};
            ${fontSizes.size6};
        `,
        Small: css`
            ${fonts.heading};
            ${fontSizes.size5};
        `,
    },
};

export type BodyTypography = typeof typography['bodyText'];
export type AvailableBodyTypography = keyof BodyTypography;

export type BodyTitleTypography = typeof typography['bodyTitle'];
export type AvailableBodyTitleTypography = keyof BodyTitleTypography;

export type HeadingTypography = typeof typography['heading'];
export type AvailableHeadingTypography = keyof HeadingTypography;

export type Typography = typeof typography;
export type AvailableTypography = keyof Typography;
