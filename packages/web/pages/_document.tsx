import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * A Custom NextJS Document for our application
 */
export default class NerveDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

/**
 * Configure Styled Components for our app to allow it to work with SSR in NextJS
 *
 * Note: `getInitialProps` belongs to `_document` (instead of `_app`),
 * as it's compatible with server-side generation (SSG) in this context.
 */
NerveDocument.getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: any) => (props: any) =>
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
};
