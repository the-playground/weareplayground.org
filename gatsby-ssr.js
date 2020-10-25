/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';

// import { SNIPCART_STYLESHEET_VERSION } from '@app/config/snipcart';

// Direct-export our browser wrapper for SSR
export { wrapRootElement, wrapPageElement } from './gatsby-browser';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onRenderBody = ({ setHeadComponents }) => {
    /**
     * Load external css SSR
     */
    setHeadComponents([
        <link
            key="heading-font"
            rel="preload"
            href="/fonts/inter-black.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            key="bold-body-font"
            rel="preload"
            href="/fonts/inter-semibold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            key="regular-body-font"
            rel="preload"
            href="/fonts/inter-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        // Snipcart v3
        // <link
        //     key="css-snipcart"
        //     rel="stylesheet"
        //     id="snipcart-css"
        //     href={`https://cdn.snipcart.com/themes/v${SNIPCART_STYLESHEET_VERSION}/default/snipcart.css`}
        //     type="text/css"
        // />,
    ]);
};
