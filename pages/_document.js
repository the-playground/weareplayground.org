// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class PlaygroundDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Snipcart V3 -- https://docs.snipcart.com/v3/setup/installation */}
					<link
						rel="stylesheet"
						id="snipcart-css"
						src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css"
						type="text/css"
					/>
				</Head>
				<body>
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
