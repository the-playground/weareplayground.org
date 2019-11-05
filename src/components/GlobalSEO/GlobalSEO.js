import React from 'react';
import Helmet from 'react-helmet'

// Import utilities
import {getCurrentRootURL} from '../../../utils/URL'

/**
 *
 * TODO: Research rel="canonical" meta tags.
 */

const GlobalSEO = ({ data }) => {

	const { company, siteVerification } = data;

	return (
		<Helmet>

			{/* Default language and direction */}
			<html lang="en" dir="ltr" />

			<link rel="canonical" href={getCurrentRootURL()} />

			<meta name="google-site-verification" content={siteVerification.google} />
			<meta name="msvalidate.01" content={siteVerification.bing} />
			<meta name="norton-safeweb-site-verification" content={siteVerification.norton} />

			<meta name="geo.region" content={`US-${company.location.stateCode}`} />
			<meta name="geo.placename" content={company.location.city} />

			{/*Global OpenGraph meta */}
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content='website' />
			<meta property="og:sitename" content={company.name} />
			<meta name="og:email" content={company.email}/>
			<meta name="og:country-name" content="USA"/>
			<meta name="og:region" content={company.location.stateCode} />
			<meta name="og:postal-code" content={company.location.zip} />

			{/* You can get this id when you create an app id on Facebook of your Facebook page */}
			<meta property="fb:app_id" content={company.social.facebookAppID} />

			{/* Google Specific Tags -- prevent search boc from showing up on Google */}
			<meta name="google" content="nositelinkssearchbox" />

		</Helmet>
	)

}

export default GlobalSEO
