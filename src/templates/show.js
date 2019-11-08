import React from 'react'
import {Layout} from '../components/Layout'
import { SEOMetaPage } from '../components/SEO'
import { Show } from '../components/Show'
import { graphql } from 'gatsby'
import { getPrismicSlice } from '../__utility__/prismic'

const ShowTemplate = ({data}) => {

	const pageMeta = getPrismicSlice( data.prismic.show.body, 'basic_seo' );

	return (

		<Layout>
			<SEOMetaPage metadata={pageMeta} />
			<Show />
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
