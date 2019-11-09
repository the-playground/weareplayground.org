import React, { Fragment } from 'react'

// UI imports

// SEO imports
import { useCompanyMetadata } from '../../__hooks__/company';
import { SEOGlobalMeta } from '../SEO'

// Structural imports
import {Footer} from './Footer'
import {Header} from './Header'

const Layout = ({children, noHeader, noFooter}) => {

	const { company, siteVerification } = useCompanyMetadata();

	return (

		<Fragment>

			<SEOGlobalMeta company={company} verifications={siteVerification} />

			{ noHeader ? '' : <Header /> }
				<main>
					{children}
				</main>
			{ noFooter ? '' : <Footer /> }

		</Fragment>

	)

};

export default Layout
