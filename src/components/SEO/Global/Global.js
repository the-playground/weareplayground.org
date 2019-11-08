import React from 'react';
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

// Import utilities
import {getCurrentRootURL} from '../../../__utility__/URL'

/**
 *
 * TODO: Research rel="canonical" meta tags.
 */

 /**
 * Component: SEOGlobal
 *
 * @description Handles rendering global static meta tags for improved SEO
 * @since 1.0.0
 *
 * @param {object} company
 * @param {object} verifications
 */
const SEOGlobal = ({ company, verifications }) => {

	const facebookAppID = ( company.social && company.social.facebookAppID ) ? company.social.facebookAppID : null;

	const googleVerification = verifications.google ? verifications.google : null;
	const bingVerification = verifications.bing ? verifications.bing : null;
	const nortonVerification = verifications.norton ? verifications.norton : null;

	return (

		<Helmet>

			{/* Default language and direction */}
			<html lang="en" dir="ltr" />

			{/* Handle site verifications generation */}
			{ googleVerification ? <meta name="google-site-verification" content={verifications.google} /> : '' }
			{ bingVerification ? <meta name="msvalidate.01" content={verifications.bing} /> : '' }
			{ nortonVerification ? <meta name="norton-safeweb-site-verification" content={verifications.norton} /> : '' }

			{/* Facebook App ID for your FB Business App */}
			{ facebookAppID ? <meta property="fb:app_id" content={facebookAppID} /> : '' }

			{/* Google Specific Tags -- prevent search boc from showing up on Google */}
			<meta name="google" content="nositelinkssearchbox" />

			{/* Canonical URL */}
			<link rel="canonical" href={getCurrentRootURL()} />

			{/* Set geo location for business */}
			<meta name="geo.region" content={`US-${company.location.stateCode}`} />
			<meta name="geo.placename" content={company.location.city} />

			{/* Global OpenGraph meta */}
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content='website' />
			<meta property="og:sitename" content={company.name} />
			<meta name="og:email" content={company.email}/>
			<meta name="og:country-name" content="USA"/>
			<meta name="og:region" content={company.location.stateCode} />
			<meta name="og:postal-code" content={company.location.zip} />

		</Helmet>

	)

}

/**
 * ----------
 * Prop Types
 * ----------
 */
SEOGlobal.propTypes = {

	company: PropTypes.shape({

		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,

		location: PropTypes.shape({
			stateCode: PropTypes.string.isRequired,
			city: PropTypes.string.isRequired,
			zip: PropTypes.string.isRequired,
		}),

		social: PropTypes.shape({
			faceBookAppID: PropTypes.string
		}),

	}).isRequired,

	verifications: PropTypes.shape({
		google: PropTypes.string,
		bing: PropTypes.string,
		norton: PropTypes.string
	}),

}

export default SEOGlobal
