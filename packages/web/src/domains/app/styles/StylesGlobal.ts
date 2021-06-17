import { createGlobalStyle } from 'styled-components';
import { appBaseFontSize, fonts, zIndex } from '@web/core/tokens';

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
		background-color: ${(props) => props.theme.surfaces.default};
		line-height: 1.6;
		min-height: 100%;
		overflow-x: hidden;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	#portal-root {
		position: relative;
		z-index: ${zIndex.portal};
	}

	::selection {
  		background: ${(props) => props.theme.palette.primary.base};
	}
	::-moz-selection {
		background:  ${(props) => props.theme.palette.primary.base};
	}

	/**
	 * Utility Classes
	 */
	 .u-visually-hidden {
		position: absolute !important;
		height: 1px;
		width: 1px;
		overflow: hidden;
		clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
		clip: rect(1px, 1px, 1px, 1px);
		white-space: nowrap; /* added line */
	 }

	 /**
	  *
	  */
	  .u-gritty {
		  position: relative;
	  }

`;
