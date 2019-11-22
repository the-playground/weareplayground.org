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
const baseFontSizeRem = 17; // approx 17px base

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
const mobileScaleRatio = 1.2; // Major Second

/**
 * Define the font sizes used on smaller "mobile" devices
 *
 * @uses exponentiation `**` to "climb" the typographic scale and produce unified font sizing
 * @since 1.0.0
 */

/**
 * Handle generating responsive CSS for font sizes
 *
 * @param {string} size the size to fetch from the typeScale
 */
const generateFontSizings = size => css`
	font-size: ${size.mobile}px;
	${breakpoints.s} {
		font-size: ${size.desktop}px;
	}
`;

// These sizes were based on Stripe's Body Text... it's so beautiful, why not borrow it!
export const bodyFontSizes = {
	size0: css`
		font-size: 14px;
	`,
	size1: css`
		font-size: 17px;
	`,
	size2: css`
		font-size: 23px;
	`,
	size3: css`
		font-size: 27px;
		${breakpoints.s} {
			font-size: 30px;
		}
	`,
};

const headingTypeScale = {
	step0: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 3,
		desktop: baseFontSizeRem * desktopScaleRatio ** 3,
	},
	step1: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 4,
		desktop: baseFontSizeRem * desktopScaleRatio ** 4,
	},
	step2: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 5,
		desktop: baseFontSizeRem * desktopScaleRatio ** 5,
	},
	step3: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 6,
		desktop: baseFontSizeRem * desktopScaleRatio ** 6,
	},
	step4: {
		mobile: baseFontSizeRem * mobileScaleRatio ** 7,
		desktop: baseFontSizeRem * desktopScaleRatio ** 7,
	},
};

// Generated on a 1.25 ratio Major Third scale with a 17px base.
export const headingFontSizes = {
	size0: generateFontSizings(headingTypeScale.step0),
	size1: generateFontSizings(headingTypeScale.step1),
	size2: generateFontSizings(headingTypeScale.step2),
	size3: generateFontSizings(headingTypeScale.step3),
	size4: generateFontSizings(headingTypeScale.step4),
};
