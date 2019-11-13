import Head from 'next/head'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { companyDataFragment } from '../../../__graphql__/fragments/company'

/**
 *
 * TODO: Research rel="canonical" meta tags.
 */

const GLOBAL_META_QUERY = gql`
	query GlobalMetaQuery {
		...companyDataFragment
		allSiteconfigs{
			edges{
				node{
					verification_google
					verification_bing
					verification_norton
				}
			}
		}
	}
	${companyDataFragment}
`

 /**
 * Component: SEOGlobal
 *
 * @description Handles rendering global static meta tags for improved SEO
 * @since 1.0.0
 *
 * @param {object} company
 * @param {object} verifications
 */
const SEOGlobal = () => {

	const { data, loading, error } = useQuery( GLOBAL_META_QUERY );

	if (loading) return <Head></Head>

	const company = data.allCompanyconfigs.edges[0].node;
	const verifications = data.allSiteconfigs.edges[0].node;

	const facebookAppID = company.facebook_app_id ? company.facebook_app_id : null;
	const googleVerification = verifications.verification_google ? verifications.verification_google : null;
	const bingVerification = verifications.verification_bing ? verifications.verification_bing : null;
	const nortonVerification = verifications.verification_norton ? verifications.verification_norton : null;

	return (

		<Head>

			{/* Handle site verifications generation */}
			{ googleVerification ? <meta name="google-site-verification" content={googleVerification} /> : '' }
			{ bingVerification ? <meta name="msvalidate.01" content={bingVerification} /> : '' }
			{ nortonVerification ? <meta name="norton-safeweb-site-verification" content={nortonVerification} /> : '' }

			{/* Facebook App ID for your FB Business App */}
			{ facebookAppID ? <meta property="fb:app_id" content={facebookAppID} /> : '' }

			{/* Google Specific Tags -- prevent search boc from showing up on Google */}
			<meta name="google" content="nositelinkssearchbox" />

			{/* Canonical URL */}
			{/*<link rel="canonical" href={getCurrentRootURL()} />*/}

			{/* Set geo location for business */}
			<meta name="geo.region" content={`US-${company.location_state_code}`} />
			<meta name="geo.placename" content={company.location_city} />

			{/* Global OpenGraph meta */}
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content='website' />
			<meta property="og:sitename" content={company.name} />
			<meta name="og:email" content={company.contact_email}/>
			<meta name="og:country-name" content="USA"/>
			<meta name="og:region" content={company.location_state_code} />
			<meta name="og:postal-code" content={company.location_zip} />

		</Head>

	)

}

export default SEOGlobal
