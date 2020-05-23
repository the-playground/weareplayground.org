/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// Import our default css theme
import './src/__themes__/palette.css';
import './src/__themes__/defaultTheme.css';

import React from 'react';

// Wrap root with all logic to make SSR work
export { wrapRootElement } from './gatsby-browser';

export const onRenderBody = ({ setHeadComponents }) => {
    /**
     * Load external css SSR
     */
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/stage-1/GreycliffCF-Regular-kern--stage1.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            rel="preload"
            href="/fonts/stage-1/GreycliffCF-Bold-kern--stage1.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            rel="preload"
            href="/fonts/stage-1/GreycliffCF-Heavy-kern--stage1.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,

        // Snipcart v3
        <link
            rel="stylesheet"
            id="snipcart-css"
            href="https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.css"
            type="text/css"
        />,
    ]);
};
