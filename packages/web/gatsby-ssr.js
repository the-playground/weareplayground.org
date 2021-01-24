/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import React from 'react';

// Direct-export our browser wrapper for SSR
export { wrapRootElement, wrapPageElement } from './gatsby-browser';

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
    ]);
};
