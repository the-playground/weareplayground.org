/**
 * Design Tokens » Typography » Fonts
 *
 * Define the fonts to use across our project.
 *
 * @since 1.0.0
 */

import { css } from 'styled-components';

const fonts = {
	//
	bodyText: css`
		font-family: 'Greycliff', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
			sans-serif;
		font-style: normal;
		font-weight: 400;
	`,

	//
	bodyTextBold: css`
		font-family: 'Greycliff', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
			sans-serif;
		font-style: normal;
		font-weight: 600;
	`,

	//
	headingStandard: css`
		font-family: 'Greycliff', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell sans-serif;
		font-style: normal;
		font-weight: 900;
	`,

	//
	headingGrunge: css`
		font-family: 'Veneer', 'Greycliff', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
			sans-serif;
		font-style: normal;
		font-weight: 900;
	`,
};

export default fonts;
