/**
 * Design Token » Font Sizes
 *
 * The core ideas in this file are pulled from a system called Ether by the talented
 * folks over at The Scenery.
 *
 * https://github.com/wearethescenery/ether-system-react/blob/master/src/base/typography/fontSizes.js
 *
 * Note that the linked file is modified in our implementation to suit preference.
 *
 * @since 1.0.0
 */

import { css } from 'styled-components';
import breakpoints from '../breakpoints';

/**
 * The base font size for our entire project is in `rem`s, and we set the
 * default unit-less value here.
 *
 * @since 1.0.0
 */
const baseFontSizeRem = 1.063; // approx 17px base

/**
 * These typographic scale values control typography sizing
 * across the entire site.
 *
 * Scale values are pulled from https://type-scale.com/ and are
 * ultimately chosen via designer/developer collaboration.
 *
 * @since 1.0.0
 */
const desktopScaleRatio = 1.333; // Perfect Fourth
const mobileScaleRatio = 1.2; // Minor Third

/**
 * Define the font sizes used on smaller "mobile" devices
 *
 * @uses exponentiation `**` to "climb" the typographic scale and produce unified font sizing
 * @since 1.0.0
 */

const typeScale = {
	step0: {
		mobile: baseFontSizeRem / mobileScaleRatio,
		desktop: baseFontSizeRem / desktopScaleRatio,
	},
	step1: {
		mobile: baseFontSizeRem,
		desktop: baseFontSizeRem,
	},
	step2: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 1,
		desktop: baseFontSizeRem * desktopScaleRatio ** 1,
	},
	step3: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 2,
		desktop: baseFontSizeRem * desktopScaleRatio ** 2,
	},
	step4: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 3,
		desktop: baseFontSizeRem * desktopScaleRatio ** 3,
	},
	step5: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 4,
		desktop: baseFontSizeRem * desktopScaleRatio ** 4,
	},
	step6: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 5,
		desktop: baseFontSizeRem * desktopScaleRatio ** 5,
	},
	step7: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 6,
		desktop: baseFontSizeRem * desktopScaleRatio ** 6,
	},
	step8: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 8,
		desktop: baseFontSizeRem * desktopScaleRatio ** 8,
	},
};

/**
 * Handle generating responsive CSS for font sizes
 *
 * @param {string} size the size to fetch from the typeScale
 */
const generateFontSizings = size => css`
	font-size: ${size.mobile}rem;
	${breakpoints.s} {
		font-size: ${size.desktop}rem;
	}
`;

/**
 * Create our final font sizing styles based on the type scale values above.
 * Media queries are rolled into the style definitions by default to make dev life easier.
 *
 * @since 1.0.0
 */
export const fontSizes = {
	size0: generateFontSizings(typeScale.step0),
	size1: generateFontSizings(typeScale.step1),
	size2: generateFontSizings(typeScale.step2),
	size3: generateFontSizings(typeScale.step3),
	size4: generateFontSizings(typeScale.step4),
	size5: generateFontSizings(typeScale.step5),
	size6: generateFontSizings(typeScale.step6),
	size7: generateFontSizings(typeScale.step7),
	size8: generateFontSizings(typeScale.step8),
};
