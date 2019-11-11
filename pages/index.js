import React from 'react'

import {Layout} from '../lib/components/Layout'
import {SEOPageMeta} from '../lib/components/SEO'

const HomePage = () => {

	return (

		<Layout>

			Home Page

			<div hidden id="snipcart" data-api-key={process.env.GATSBY_SNIPCART_API_KEY}></div>

		</Layout>

	)

}

export default HomePage
