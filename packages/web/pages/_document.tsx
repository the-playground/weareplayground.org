import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GlobalSEO } from '@nerve/domains/seo';

/**
 * A Custom NextJS Document for our application
 */
class NerveDocument extends Document {
    /**
     * Configure Styled Components for our app to allow it to work with SSR in NextJS
     *
     * Note: `getInitialProps` belongs to `_document` (instead of `_app`),
     * as it's compatible with server-side generation (SSG) in this context.
     */
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="en" dir="ltr">
                <Head>
                    {/* <GlobalSEO /> */}
                    <link
                        key="heading-font"
                        rel="preload"
                        href="/fonts/inter-black.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <link
                        key="bold-body-font"
                        rel="preload"
                        href="/fonts/inter-semibold.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />

                    <link
                        key="regular-body-font"
                        rel="preload"
                        href="/fonts/inter-regular.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default NerveDocument;
