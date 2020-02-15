import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// Import utilities
import { getCurrentRootURL } from '../../../__utility__/URL';

/**
 * Component: SEOPage
 *
 * @description Handles rendering necessary meta tags for improved SEO
 * @since 1.0.0
 *
 * @param {object} data
 * @param {string} robots
 */

const SEOPage = ({ metadata, robots }) => {
	// create helpers
	// formatSEOTitle(  ) -- create a format for our titles
	// getFallbackTwitterImage(  ) -- fallback image for twitter cards
	// getFallbackSEOImage(  ) -- fallback image for open graph & SEO

	const url = getCurrentRootURL();
	const title = metadata.meta_title ? metadata.meta_title : ``;
	const description = metadata.meta_description ? metadata.meta_description : ``;

	const image = metadata.meta_image ? metadata.meta_image : ``;

	const imageAlt = image.alt ? image.alt : ``;
	const imageWidth = image.dimensions.width ? image.dimensions.width : ``;
	const imageHeight = image.dimensions.height ? image.dimensions.height : ``;
	const imageURL = image.url ? image.url : ``;

	const twitterImageURL = metadata.twitter_card_image ? metadata.twitter_card_image.url : imageURL; // eslint-disable-line

	return (
		<Helmet>
			{/* Standard meta data for search engines */}
			<title>{`${title}`}</title>
			<meta name="description" content={description} />
			<meta name="image" content={imageURL} />

			{/* Search engine visibility */}
			<meta name="robots" content={robots} />

			{/* Opengraph meta tags for Facebook & LinkedIn */}
			<meta property="og:url" content={`${url}`} />
			<meta property="og:title" content={`${title}`} />
			<meta property="og:description" content={description} />

			<meta property="og:image" content={imageURL} />
			<meta property="og:image:secure_url" content={imageURL} />
			<meta property="og:image:alt" content={imageAlt} />
			<meta property="og:image:height" content={imageHeight} />
			<meta property="og:image:width" content={imageWidth} />

			{/* These tags work for Twitter & Slack, notice I've included more custom tags like reading time etc... */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={`${title}`} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={twitterImageURL} />
		</Helmet>
	);
};

/**
 * ----------
 * Prop Types
 * ----------
 */

SEOPage.propTypes = {
	metadata: PropTypes.shape({
		meta_title: PropTypes.string.isRequired,
		meta_description: PropTypes.string.isRequired,

		meta_image: PropTypes.shape({
			url: PropTypes.string.isRequired,
			dimensions: PropTypes.shape({
				height: PropTypes.number.isRequired,
				width: PropTypes.number.isRequired,
			}),
			alt: PropTypes.string.isRequired,
		}).isRequired,
	}),

	robots: PropTypes.string,
};

/**
 * -------------
 * Default Props
 * -------------
 */
SEOPage.defaultProps = {
	robots: `noindex, nofollow`,
};

export default SEOPage;
