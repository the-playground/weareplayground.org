import React, { Fragment } from 'react'

// UI imports
import { ThemeProvider } from 'styled-components'
import {GlobalStyles} from '../GlobalStyles'
import themes from '../../../__system/themes'

// SEO imports
import {GlobalSEO} from '../../../../utils/components/GlobalSEO'
import {PageSEO} from '../../../../utils/components/PageSEO'

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
