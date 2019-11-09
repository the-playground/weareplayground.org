import React, { Fragment } from 'react'

// UI imports

// Structural imports
import {Footer} from './Footer'
import {Header} from './Header'

const Layout = ({children, noHeader, noFooter}) => {

	return (

		<Fragment>

			{ noHeader ? '' : <Header /> }
				<main>
					{children}
				</main>
			{ noFooter ? '' : <Footer /> }

		</Fragment>

	)

};

export default Layout
