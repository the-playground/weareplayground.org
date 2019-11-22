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

import fonts from './fonts';
import { bodyFontSizes, headingFontSizes } from './typeScale';

const typography = {
	// BodyText
	bodyText: {
		XLarge: css`
			${fonts.bodyText};
			${bodyFontSizes.size3};
		`,
		Large: css`
			${fonts.bodyText};
			${bodyFontSizes.size2};
		`,
		Medium: css`
			${fonts.bodyText};
			${bodyFontSizes.size1};
		`,
		Small: css`
			${fonts.bodyText};
			${bodyFontSizes.size0};
		`,
	},

	// Body » Bold
	bodyTextBold: {
		XLarge: css`
			${fonts.bodyTextBold};
			${bodyFontSizes.size3};
		`,
		Large: css`
			${fonts.bodyTextBold};
			${bodyFontSizes.size2};
		`,
		Medium: css`
			${fonts.bodyTextBold};
			${bodyFontSizes.size1};
		`,
		Small: css`
			${fonts.bodyTextBold};
			${bodyFontSizes.size0};
		`,
	},

	// Heading » Standard
	heading: {
		XLarge: css`
			${fonts.heading};
			${headingFontSizes.size3};
		`,
		Large: css`
			${fonts.heading};
			${headingFontSizes.size2};
		`,
		Medium: css`
			${fonts.heading};
			${headingFontSizes.size1};
		`,
		Small: css`
			${fonts.heading};
			${headingFontSizes.size0};
		`,
	},

	// Heading » Grunge
	grungeHeading: {
		Medium: css`
			${fonts.grungeHeading};
			${headingFontSizes.size4};
		`,
		Small: css`
			${fonts.grungeHeading};
			${headingFontSizes.size3};
		`,
	},
};

export default typography;
