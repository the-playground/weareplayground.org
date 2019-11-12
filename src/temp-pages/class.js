// import React from 'react'
// import { graphql } from 'gatsby'

// import {Layout} from '../components/Layout'
// import { SEOPageMeta } from '../components/SEO'

// import { getPrismicSlice } from '../__utility__/prismic'

// const ClassTemplate = ({data}) => {

// 	const pageMeta = getPrismicSlice( data.prismic.class.body, 'basic_seo' );

// 	return (

// 		<Layout>
// 			<SEOPageMeta metadata={pageMeta} />
// 		</Layout>

// 	)

// }

// export const query = graphql`

// 	query ClassDataByID( $uid: String! ) {
// 		prismic {
// 			class(lang: "en-us", uid: $uid) {
// 				...ExpandedClassDataFragment
// 			}
// 		}
// 	}

// `

// export default ClassTemplate
