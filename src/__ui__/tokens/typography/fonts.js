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
	bodyCommon: css`
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
			sans-serif;
		font-style: normal;
		font-weight: 400;
	`,

	//
	bodyBold: css`
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
			sans-serif;
		font-style: normal;
		font-weight: 500;
	`,

	//
	headingStandard: css``,

	//
	headingGrunge: css``,
};

export default fonts;
