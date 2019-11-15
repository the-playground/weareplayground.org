/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// global imports
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SiteProvider } from './src/__context__/SiteContext';
import { ShowProvider } from './src/__context__/ShowContext';

// Import our themes
import themes from './src/__ui__/themes';

// Register global styles
require('./static/styles/normalize.css');

// Handle Application wrapper
export const wrapRootElement = ({ element }) => (
	<SiteProvider>
		<ShowProvider>
			<ThemeProvider theme={themes.primary}>{element}</ThemeProvider>
		</ShowProvider>
	</SiteProvider>
);
