import React from 'react'
import { graphql } from 'gatsby'


import {Layout} from '../components/Layout'
import {getPrismicSlice} from '../__utility__/prismic';

const HomePage = ({data}) => {

	const globalMeta = data.site.siteMetadata;
	const pageMeta = getPrismicSlice( data.prismic.home_page.body, 'basic_seo' );

	return (

		<Layout globalSEO={globalMeta} pageSEO={pageMeta}>
			Coming soon...
		</Layout>

	)

}

export const query = graphql`
	query HomePageData {
		...SiteGlobalSEOFragment
		...PageSEOFragment
	}
`

export default HomePage
