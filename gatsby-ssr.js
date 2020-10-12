/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';

// Direct-export our browser wrapper for SSR
export { wrapRootElement, wrapPageElement } from './gatsby-browser';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onRenderBody = ({ setHeadComponents }) => {
    /**
     * Load external css SSR
     */
    setHeadComponents([
        // Snipcart v3
        // <link
        //     key="css-snipcart"
        //     rel="stylesheet"
        //     id="snipcart-css"
        //     href="https://cdn.snipcart.com/themes/v3.0.15/default/snipcart.css"
        //     type="text/css"
        // />,
    ]);
};
