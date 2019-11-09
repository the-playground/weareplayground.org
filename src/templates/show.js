import React from 'react'

import { SEOPageMeta } from '../components/SEO'
import { Layout } from '../components/Layout'
import { getPrismicSlice } from '../__utility__/prismic'

const ShowTemplate = ({data}) => {

	// const pageMeta = getPrismicSlice( data.prismic.show.body, 'basic_seo' );

	return (

		<Layout pageMeta={pageMeta}>
				<SEOPageMeta metadata={pageMeta} />
				Single Show Page
		</Layout>

	)

}

export default ShowTemplate
