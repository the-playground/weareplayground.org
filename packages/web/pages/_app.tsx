import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@nerve/core/themes/default';

import {
    ConfigProvider,
    IGlobalConfigs,
    companyConfigQuery,
    seoConfigQuery,
    siteConfigQuery,
    linkMapConfigQuery,
    buildLinkMapConfig,
    UIProvider,
} from '@nerve/shared/context';

import { sanityClient } from '@nerve/shared/lib';

function NerveApp({ Component, pageProps }: AppProps): JSX.Element {
    console.log('Custom App Props:', pageProps);
    return (
        <>
            <ConfigProvider configs={pageProps.configs}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ConfigProvider>
        </>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
NerveApp.getInitialProps = async (appContext: AppContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const getAppProps: Promise<AppInitialProps> = App.getInitialProps(
        appContext
    );

    /**
     * Fetch required "blocking" application data. The site cannot be rendered
     * without all of this data resolving.
     */
    const getCompanyConfig = sanityClient.fetch(companyConfigQuery);
    const getSeoConfig = sanityClient.fetch(seoConfigQuery);
    const getSiteConfig = sanityClient.fetch(siteConfigQuery);
    const getLinkMapConfig = sanityClient.fetch(linkMapConfigQuery);

    const [appProps, company, seo, site, links] = await Promise.all([
        getAppProps,
        getCompanyConfig,
        getSeoConfig,
        getSiteConfig,
        getLinkMapConfig,
    ]);

    // Fetch app Config Here
    return {
        ...appProps,
        pageProps: {
            ...appProps.pageProps,
            configs: {
                company,
                seo,
                site,
                links: buildLinkMapConfig(links),
            },
        },
    };
};

export default NerveApp;
