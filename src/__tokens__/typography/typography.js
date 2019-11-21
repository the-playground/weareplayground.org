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
		//
	},

	// Heading » Standard
	headingStandard: {
		//
	},

	// Heading » Grunge
	headingGrunge: {
		//
	},
};

export default typography;
