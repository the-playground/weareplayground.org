/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// global imports
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { GatsbyBrowser } from 'gatsby';

import { theme } from '@nerve/core/themes/default';
import { Layout } from '@nerve/domains/app';

import {
    ConfigProvider,
    EnvironmentProvider,
    SeasonProvider,
    ShowProvider,
    UIProvider,
} from '@nerve/shared/context';

// Persist our core layout across the entire app
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
    element,
    props,
}) => <Layout {...props}> {element} </Layout>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
    element,
}) => (
    <EnvironmentProvider>
        <ConfigProvider>
            <SeasonProvider>
                <ShowProvider>
                    <ThemeProvider theme={theme}>
                        <UIProvider>{element} </UIProvider>
                    </ThemeProvider>
                </ShowProvider>
            </SeasonProvider>
        </ConfigProvider>
    </EnvironmentProvider>
);
