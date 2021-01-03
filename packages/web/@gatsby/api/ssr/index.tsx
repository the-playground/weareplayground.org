/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *RenderBodyArgs
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';

import { GatsbySSR, RenderBodyArgs } from 'gatsby';

// Direct-export our browser wrapper for SSR
export { wrapRootElement, wrapPageElement } from '@gatsby/api/browser';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
    setHeadComponents,
}: RenderBodyArgs): any => {
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
