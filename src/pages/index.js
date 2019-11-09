import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEOPageMeta } from '../components/SEO'
import { getPrismicSlice } from '../__utility__/prismic';

const HomePage = ({data}) => {

	const pageMeta = getPrismicSlice( data.prismic.home_page.body, 'basic_seo' );

	return (

		<Layout>
			<SEOPageMeta metadata={pageMeta} />
			Home Page

			<div hidden id="snipcart" data-api-key={process.env.GATSBY_SNIPCART_API_KEY}></div>

		</Layout>

	)

}

export const query = graphql`
	query HomePageData {
		...PageSEOFragment
	}
`

export default HomePage
