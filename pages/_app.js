/**
 * Implement a custom Application root so we can wrap our application with context or functionality
 * that needs to be made available in the browser
 *
 * Ref: https://nextjs.org/docs#custom-app
 * @since 1.0.0
 */

import App from 'next/app';

import { ThemeProvider } from 'styled-components';
import { SiteProvider } from '../src/__context__/SiteContext';
import { ShowProvider } from '../src/__context__/ShowContext';

// Import our themes
import themes from '../src/__ui__/themes';

class PlaygroundApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<SiteProvider>
				<ShowProvider>
					<ThemeProvider theme={themes.primary}>
						<Component {...pageProps} />
					</ThemeProvider>
				</ShowProvider>
			</SiteProvider>
		);
	}
}

export default PlaygroundApp;
