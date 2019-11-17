/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
	/**
	 * Load external css SSR
	 */
	setHeadComponents([
		// Snipcart v3
		<link rel="stylesheet" id="snipcart-css" href="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css" type="text/css" />,
	]);
};
