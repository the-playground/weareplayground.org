/**
 * Design Tokens » Typography » Fonts
 *
 * Define the fonts to use across our project.
 * Fallback Font Stacks references from: https://css-tricks.com/snippets/css/system-font-stack/
 *
 * @since 1.0.0
 */

import { css } from 'styled-components';

const fonts = {
	// Greycliff CF Regular
	bodyText: css`
		font-family: 'Greycliff', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
			sans-serif;
		font-style: normal;
		font-weight: 400;
	`,

	// Greycliff CF DemiBold
	bodyTextBold: css`
		font-family: 'Greycliff', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
			sans-serif;
		font-style: normal;
		font-weight: 600;
	`,

	// Greycliff CF Heavy
	headingStandard: css`
		font-family: 'Greycliff', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell sans-serif;
		font-style: normal;
		font-weight: 900;
	`,

	// Veneer Grunge
	headingGrunge: css`
		font-family: 'Veneer', 'Greycliff', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
			sans-serif;
		font-style: normal;
		font-weight: 900;
	`,
};

export default fonts;
