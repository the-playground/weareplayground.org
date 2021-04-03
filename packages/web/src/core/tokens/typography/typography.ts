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

import { fonts } from './fonts';
import { fontSizes } from './typeScale';

export const typography = {
    // BodyText
    bodyText: {
        xl: `
            ${fonts.bodyText};
            ${fontSizes.size3};
            line-height: 1.6;
        `,
        l: `
            ${fonts.bodyText};
            ${fontSizes.size2};
            line-height: 1.6;
        `,
        m: `
            ${fonts.bodyText};
            ${fontSizes.size1};
            line-height: 1.7;
        `,
        s: `
            ${fonts.bodyText};
            ${fontSizes.size0};
            line-height: 1.6;
        `,
    },

    // Body » Bold
    bodyBold: {
        xl: `
            ${fonts.bodyBold};
            ${fontSizes.size3};
            line-height: 1.2;
        `,
        l: `
            ${fonts.bodyBold};
            ${fontSizes.size2};
            line-height: 1.3;
        `,
        m: `
            ${fonts.bodyBold};
            ${fontSizes.size1};
            line-height: 1.3;
        `,
        s: `
            ${fonts.bodyBold};
            ${fontSizes.size0};
            line-height: 1.4;
        `,
    },

    // Heading » Standard
    heading: {
        xl: `
            ${fonts.heading};
            ${fontSizes.size8};
            line-height: 1.1;
        `,
        l: `
            ${fonts.heading};
            ${fontSizes.size7};
            line-height: 1.1;
        `,
        m: `
            ${fonts.heading};
            ${fontSizes.size6};
            line-height: 1.1;
        `,
        s: `
            ${fonts.heading};
            ${fontSizes.size5};
            line-height: 1.15;
        `,
        xs: `
            ${fonts.heading};
            ${fontSizes.size3};
            line-height: 1.2;
        `,
    },
};

export type BodyTypography = typeof typography['bodyText'];
export type AvailableBodyTypography = keyof BodyTypography;

export type HeadingTypography = typeof typography['heading'];
export type AvailableHeadingTypography = keyof HeadingTypography;

export type Typography = typeof typography;
export type AvailableTypography = keyof Typography;
