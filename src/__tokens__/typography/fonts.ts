/**
 * Design Tokens » Typography » Fonts
 *
 * Define the fonts to use across our project.
 * Fallback Font Stacks references from: https://css-tricks.com/snippets/css/system-font-stack/
 *
 * @since 1.0.0
 */

import { css } from 'styled-components';

export const fonts = {
    // Greycliff CF Regular
    bodyText: css`
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
        font-style: normal;
        font-weight: 400;
    `,

    // Greycliff CF Bold
    bodyBold: css`
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
        font-style: normal;
        font-weight: 700;
    `,

    // Greycliff CF Heavy
    heading: css`
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif;
        font-style: normal;
        font-weight: 900;
    `,
};

export type Fonts = typeof fonts;
export type AvailableFont = keyof Fonts;
