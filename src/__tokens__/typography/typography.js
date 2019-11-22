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
import fontSizes from './typeScale';

const typography = {
	// BodyText
	bodyText: {
		XXLarge: css`
			${fonts.bodyText};
			${fontSizes.size6};
		`,
		XLarge: css`
			${fonts.bodyText};
			${fontSizes.size4};
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
	bodyTextBold: {
		XXLarge: css`
			${fonts.bodyTextBold};
			${fontSizes.size6};
		`,
		XLarge: css`
			${fonts.bodyTextBold};
			${fontSizes.size4};
		`,
		Large: css`
			${fonts.bodyTextBold};
			${fontSizes.size2};
		`,
		Medium: css`
			${fonts.bodyTextBold};
			${fontSizes.size1};
		`,
		Small: css`
			${fonts.bodyTextBold};
			${fontSizes.size0};
		`,
	},

	// Heading » Standard
	heading: {
		Large: css`
			${fonts.heading};
			${fontSizes.size10};
		`,
		Medium: css`
			${fonts.heading};
			${fontSizes.size8};
		`,
		Small: css`
			${fonts.heading};
			${fontSizes.size6};
		`,
	},

	// Heading » Grunge
	grungeHeading: {
		Large: css`
			${fonts.grungeHeading};
			${fontSizes.size12};
		`,
		Medium: css`
			${fonts.grungeHeading};
			${fontSizes.size11};
		`,
		Small: css`
			${fonts.grungeHeading};
			${fontSizes.size10};
		`,
	},
};

export default typography;
