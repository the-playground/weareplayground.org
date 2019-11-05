import React from 'react';
import Helmet from 'react-helmet'

// Import utilities
import {getCurrentRootURL} from '../../../__utility__/URL'

/**
 *
 * ! Remember to change robots meta tags to index, follow when we get into production!
 * @param {*} param0
 */
const PageSEO = ({ data, video, robots }) => {

	// Wrap our array of structured data components in an object to achieve proper formatting
	// const structuredDataObject = JSON.stringify({
	// 	...structuredData
	// });

	return (

		<Helmet>

			{/* Standard meta data for search engines */}
			<title>{`${data.title} | The Playground`}</title>
			<meta name="description" content={data.description} />
			<meta name="image" content={data.image.url} />

			{/* Search engine visibility */}
			<meta name="robots" content={robots ? robots : 'noindex, nofollow'} />

			{/* Opengraph meta tags for Facebook & LinkedIn */}
			<meta property="og:url" content={`${getCurrentRootURL()}/?ref=weareplayground.org`} />
			<meta property="og:title" content={`${data.title} | The Playground`} />
			<meta property="og:description" content={data.description} />

			<meta property="og:image" content={data.image.url} />
			<meta property="og:image:secure_url" content={data.image.url} />
			<meta property="og:image:alt" content={data.image.alt} />
			<meta property="og:image:height" content={data.image.dimensions.height} />
			<meta property="og:image:width" content={data.image.dimensions.width} />

			{/* Opengraph video tags for Facebook & LinkedIn */}
			{ video
				? <>
				<meta property="og:video" content={data.video.url} />
				<meta property="og:video:secure_url" content={data.video.url} />
				<meta property="og:video:duration" content={data.video.duration} />
				<meta property="og:video:height" content={data.video.height} />
				<meta property="og:video:width" content={data.video.width} />
				</>
				: ''
			}

			{/* These tags work for Twitter & Slack, notice I've included more custom tags like reading time etc... */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={`${data.title} | The Playground`} />
			<meta name="twitter:description" content={data.description} />
			<meta name="twitter:image:src" content={data.image.url} />

			{/* Structured data */}
			{/* {structuredData ? <script type="application/ld+json">{structuredDataObject}</script> : ''} */}

		</Helmet>
	)

}

export default PageSEO
