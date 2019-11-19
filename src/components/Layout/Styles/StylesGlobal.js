import React from 'react';
import { createGlobalStyle } from 'styled-components';

export const StylesGlobal = createGlobalStyle`

	html {
		font-size: 100%;
		-ms-text-size-adjust: 100%;
    	-moz-text-size-adjust: 100%;
    	-webkit-text-size-adjust: 100%;
	}

	body{
		line-height: 1.5;
		min-height: 100%;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

`;

export default StylesGlobal;
