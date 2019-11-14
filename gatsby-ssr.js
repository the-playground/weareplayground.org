/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
	/**
	 * Load external css
	 * TODO: Maybe migrate to React Helmet
	 */
	setHeadComponents([
		// Snipcart v3
		<link rel="stylesheet" id="snipcart-css" src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css" type="text/css" />,
	]);

	/**
	 * Load external js
	 */
	setPostBodyComponents([
		// Snipcart v3
		<script key="snipcart-js" type="text/javascript" src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.js" />,
	]);
};
