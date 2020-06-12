/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// global imports
import React from 'react';

import {
    ConfigProvider,
    LinkMapProvider,
    SeasonProvider,
    ShowProvider,
    UIProvider,
} from './src/__context__';

// Import our default css theme
import './src/__themes__/palette.css';
import './src/__themes__/defaultTheme.css';

// Handle Application wrapper
// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
    <ConfigProvider>
        <LinkMapProvider>
            <SeasonProvider>
                <ShowProvider>
                    <UIProvider>{element}</UIProvider>
                </ShowProvider>
            </SeasonProvider>
        </LinkMapProvider>
    </ConfigProvider>
);

export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
		import('intersection-observer'); // eslint-disable-line
        console.log(`# IntersectionObserver is polyfilled!`);
    }
};
