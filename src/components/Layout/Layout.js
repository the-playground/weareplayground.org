import React, { Fragment } from 'react'

// UI imports

// Structural imports
import {Footer} from './Footer'
import {Header} from './Header'

import { SEOGlobalMeta } from '../SEO'

const Layout = ({children, noHeader, noFooter}) => {

	return (

		<Fragment>
			<SEOGlobalMeta />

			{ noHeader ? '' : <Header /> }
				<main>
					{children}
				</main>
			{ noFooter ? '' : <Footer /> }

		</Fragment>

	)

};

export default Layout
