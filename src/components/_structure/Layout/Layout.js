import React, { Fragment } from 'react'

// UI imports
import { ThemeProvider } from 'styled-components'
import {GlobalStyles} from '../GlobalStyles'
import themes from '../../../ui/themes'

// SEO imports
import {GlobalSEO} from '../../_utility/GlobalSEO'
import {PageSEO} from '../../_utility/PageSEO'

// Structural imports
import {Footer} from '../Footer'
import {Header} from '../Header'

const Layout = ({children, globalSEO, pageSEO}) => (

	<ThemeProvider theme={themes.primary}>
		<Fragment>

			<GlobalSEO data={globalSEO}/>
			<PageSEO data={pageSEO}/>

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
