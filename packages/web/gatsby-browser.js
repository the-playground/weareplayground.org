/**
 * Implement Gatsby's Browser APIs in this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// global imports
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from './src/core/themes/default';
import { Layout } from './src/domains/app/Layout';

import {
    ConfigProvider,
    EnvironmentProvider,
    UIProvider,
} from './src/shared/context';

// Persist our core layout across the entire app
export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}> {element} </Layout>
);

export const wrapRootElement = ({ element }) => (
    <EnvironmentProvider>
        <ConfigProvider>
            <ThemeProvider theme={theme}>
                <UIProvider>{element}</UIProvider>
            </ThemeProvider>
        </ConfigProvider>
    </EnvironmentProvider>
);
