import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import {GlobalStyles} from '../GlobalStyles'
import themes from '../../../__system/themes'

import {Footer} from '../Footer'
import {Header} from '../Header'

const Layout = ({ children }) => (

	<ThemeProvider theme={themes.primary}>
		<Fragment>

			<Helmet>

				<meta name="google-site-verification" content="code" />
				<meta name="msvalidate.01" content="code" />
				<meta name="norton-safeweb-site-verification" content="code" />

				<meta name="geo.region" content="US-OH" />
				<meta name="geo.placename" content="Dayton" />

			</Helmet>

			<GlobalStyles />

			<Header />
				<main>
					{children}
				</main>
			<Footer />

		</Fragment>
	</ThemeProvider>

);

export default Layout
