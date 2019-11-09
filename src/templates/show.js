import React from 'react'
import { graphql } from 'gatsby'

import { SEOPageMeta } from '../components/SEO'
import {Layout} from '../components/Layout'
import { getPrismicSlice } from '../__utility__/prismic'

const ShowTemplate = ({data}) => {

	const pageMeta = getPrismicSlice( data.prismic.show.body, 'basic_seo' );

	return (

		<Layout pageMeta={pageMeta}>
				<SEOPageMeta metadata={pageMeta} />
				{data.prismic.show.title}
		</Layout>

	)

}

export const query = graphql`

	query ShowDataByID( $uid: String! ) {
		prismic {
			show(lang: "en-us", uid: $uid) {
				...ExpandedShowDataFragment
			}
		}
	}

`

export default ShowTemplate
