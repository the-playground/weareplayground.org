import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

/**
 * Component: SEOVideo
 *
 * @description Handles rendering necessary video meta tags for improved video SEO
 * @since 1.0.0
 *
 * @param {object} data
 */

const SEOVideo = ({ data }) => {

	return (

		<Helmet>

			{/* Opengraph video tags for Facebook & LinkedIn */}
			<meta property="og:video" content={data.url} />
			<meta property="og:video:secure_url" content={data.url} />
			<meta property="og:video:duration" content={data.duration} />
			<meta property="og:video:height" content={data.height} />
			<meta property="og:video:width" content={data.width} />

		</Helmet>

	)

}

/**
 * ----------
 * Prop Types
 * ----------
 */

SEOVideo.propTypes = {

	data: PropTypes.shape({
		url: PropTypes.string.isRequired,
		secure_url: PropTypes.string.isRequired,
		duration: PropTypes.string.isRequired,
		height: PropTypes.number.isRequired,
		width: PropTypes.number.isRequired,
	}),

}

 /**
 * -------------
 * Default Props
 * -------------
 */


export default SEOVideo
