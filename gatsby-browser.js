/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// global imports
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from './@nerve/core/themes/default';
import { Layout } from './@nerve/domains/app';

import {
    ConfigProvider,
    LinkMapProvider,
    SeasonProvider,
    ShowProvider,
    UIProvider,
} from './src/__context__';

// Persist our core layout across the entire app
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!('IntersectionObserver' in window)) {
        import('intersection-observer');
        console.log('# IntersectionObserver is polyfilled!');
    }
};
