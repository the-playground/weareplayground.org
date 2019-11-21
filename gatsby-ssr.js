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
		<link
			rel="preload"
			href="fonts/stage-1/GreycliffCF-Regular-kern--stage1.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
		/>,
		<link
			rel="preload"
			href="fonts/stage-1/GreycliffCF-DemiBold-kern--stage1.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
		/>,
		<link rel="preload" href="fonts/stage-1/GreycliffCF-Bold-kern--stage1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />,
		<link
			rel="preload"
			href="fonts/stage-1/GreycliffCF-Heavy-kern--stage1.woff2"
			as="font"
			type="font/woff2"
			crossOrigin="anonymous"
		/>,
		<link rel="preload" href="fonts/stage-1/Veneer-all--stage1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />,
		// Snipcart v3
		<link rel="stylesheet" id="snipcart-css" href="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css" type="text/css" />,
	]);
};
