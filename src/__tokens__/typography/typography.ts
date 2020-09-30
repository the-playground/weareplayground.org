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
        xl: css`
            ${fonts.bodyText};
            ${fontSizes.size3};
        `,
        l: css`
            ${fonts.bodyText};
            ${fontSizes.size2};
        `,
        m: css`
            ${fonts.bodyText};
            ${fontSizes.size1};
        `,
        s: css`
            ${fonts.bodyText};
            ${fontSizes.size0};
        `,
    },

    // Body » Bold
    bodyBold: {
        xl: css`
            ${fonts.bodyBold};
            ${fontSizes.size3};
        `,
        l: css`
            ${fonts.bodyBold};
            ${fontSizes.size2};
        `,
        m: css`
            ${fonts.bodyBold};
            ${fontSizes.size1};
        `,
        s: css`
            ${fonts.bodyBold};
            ${fontSizes.size0};
        `,
    },

    // Heading » Standard
    heading: {
        xl: css`
            ${fonts.heading};
            ${fontSizes.size8};
            line-height: 1.2;
        `,
        l: css`
            ${fonts.heading};
            ${fontSizes.size7};
            line-height: 1.2;
        `,
        m: css`
            ${fonts.heading};
            ${fontSizes.size6};
            line-height: 1.2;
        `,
        s: css`
            ${fonts.heading};
            ${fontSizes.size5};
            line-height: 1.2;
        `,
        xs: css`
            ${fonts.heading};
            ${fontSizes.size3};
            line-height: 1.2;
            letter-spacing: 2px;
        `,
    },
};

export type BodyTypography = typeof typography['bodyText'];
export type AvailableBodyTypography = keyof BodyTypography;

export type HeadingTypography = typeof typography['heading'];
export type AvailableHeadingTypography = keyof HeadingTypography;

export type Typography = typeof typography;
export type AvailableTypography = keyof Typography;
