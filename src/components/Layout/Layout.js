import React, { Fragment } from 'react'

// UI imports
import { ThemeProvider } from 'styled-components'
import themes from '../../__ui__/themes'

// SEO imports
import { useCompanyMetadata } from '../../__hooks__/company';
import { SEOMetaGlobal } from '../SEO'

// Structural imports
import {Footer} from './Footer'
import {Header} from './Header'

const Layout = ({children, noHeader, noFooter}) => {

	const { company, siteVerification } = useCompanyMetadata();

	return (

		<ThemeProvider theme={themes.primary}>
			<Fragment>

				<SEOMetaGlobal company={company} verifications={siteVerification} />

				{ noHeader ? '' : <Header /> }
					<main>
						{children}
					</main>
				{ noFooter ? '' : <Footer /> }

			</Fragment>
		</ThemeProvider>

	)

};

export default Layout
