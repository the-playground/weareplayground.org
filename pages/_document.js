import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
/**
 * This is a custom document wrapper for The Playground's Next.js App.
 *
 * * Note about Styled Components: In order to make Next.js work with Styled Components,
 * * we had to follow one of their examples and set up a Server Stylesheet and wrap the App Root with it.
 * * See Example: https://github.com/zeit/next.js/tree/master/examples/with-styled-components
 *
 * ! _document.js is only rendered on the server side and not on the client side
 * ! Event handlers like onClick can't be added to this file
 *
 * @since 1.0.0
 */
class PlaygroundDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
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

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="manifest" href="/manifest.json" />
					{/* Snipcart V3 -- https://docs.snipcart.com/v3/setup/installation */}
					{/* Async CSS -- https://www.filamentgroup.com/lab/load-css-simpler/ */}
					<link rel="stylesheet" id="snipcart-css" src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css" />
				</Head>
				<body className="playground-app">
					<Main />
					<NextScript />
					{/* Snipcart V3 -- https://docs.snipcart.com/v3/setup/installation */}
					<script key="snipcart-js" type="text/javascript" src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.js" />
				</body>
			</Html>
		);
	}
}

export default PlaygroundDocument;
