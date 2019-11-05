/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// global imports
import React from 'react';
import { SiteProvider } from './src/__context__/SiteContext'

// Register global styles
require( './static/styles/normalize.css' );

// Handle Application wrapper
export const wrapRootElement = ({ element }) => (

	<SiteProvider>{element}</SiteProvider>

)
