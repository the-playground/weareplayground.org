/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// global imports
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from './src/core/themes/default';
import { Layout } from './src/domains/app';

import {
    ConfigProvider,
    EnvironmentProvider,
    LinkMapProvider,
    UIProvider,
} from './src/shared/context';

// Persist our core layout across the entire app
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const wrapRootElement = ({ element }) => (
    <EnvironmentProvider>
        <ConfigProvider>
            <LinkMapProvider>
                <ThemeProvider theme={theme}>
                    <UIProvider>{element}</UIProvider>
                </ThemeProvider>
            </LinkMapProvider>
        </ConfigProvider>
    </EnvironmentProvider>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onClientEntry = async () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!('IntersectionObserver' in window)) {
        await import('intersection-observer');
        console.log('IntersectionObserver is polyfilled!');
    }
};
