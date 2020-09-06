/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// global imports
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/__themes__/default';

import {
    ConfigProvider,
    LinkMapProvider,
    SeasonProvider,
    ShowProvider,
    UIProvider,
} from './src/__context__';

// Handle Application wrapper
// eslint-disable-next-line
export const wrapRootElement = ({ element }) => (
    <ConfigProvider>
        <LinkMapProvider>
            <SeasonProvider>
                <ShowProvider>
                    <ThemeProvider theme={theme}>
                        <UIProvider>{element}</UIProvider>
                    </ThemeProvider>
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
