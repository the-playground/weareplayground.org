import { css, createGlobalStyle } from 'styled-components';
import { appBaseFontSize, fonts } from '@tokens';

/**
 * Define global styles and Stage 1 fonts. These are the fonts that will be preloaded and some of them will eventually
 * be replaced by Stage 2 fonts.
 */

/* eslint no-unused-expressions: 0 */
export const StylesGlobal = createGlobalStyle`

	html {
		font-size: ${appBaseFontSize}px;
		text-size-adjust: 100%;
	}

	body{
		${fonts.bodyText};
		background-color: var(--bodyBG);
		line-height: 1.5;
		min-height: 100%;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`;
