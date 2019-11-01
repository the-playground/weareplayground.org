import React from 'react';
import Helmet from 'react-helmet'

const PageSEO = ({ meta, social, video, structuredData, robots }) => {

	const currentURL = window.location.href;

	// Wrap our array of structured data components in an object to achieve proper formatting
	const structuredDataObject = JSON.stringify({
		...structuredData
	});

	return (
		<Helmet>

			{/* Standard meta data for search engines */}
			<title>{`${meta.title} | The Playground`}</title>
			<meta name="description" content={meta.description} />
			<meta name="image" content={meta.thumbnail} />
			<meta name="keywords" content={meta.keywords}/>

			{/* Search engine visibility */}
			<meta name="robots" content={robots ? robots : 'index, follow'} />

			{/* Opengraph meta tags for Facebook & LinkedIn */}
			<meta property="og:url" content={`${currentURL}/?ref=weareplayground.org`} />
			<meta property="og:title" content={`${social.title} | The Playground`} />
			<meta property="og:description" content={social.description} />
			<meta property="og:image" content={social.thumbnail} />
			{ video ? <meta property="og:video" content={video.url} /> : '' }

			{/* You can get this id when you create an app id on Facebook of your Facebook page */}
			<meta property="fb:app_id" content={social.facebookAppID} />


			{/* These tags work for Twitter & Slack, notice I've included more custom tags like reading time etc... */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content={social.links.twitter} />
			<meta name="twitter:site" content={currentURL} />
			<meta name="twitter:title" content={`${social.title} | The Playground`} />
			<meta name="twitter:description" content={social.description} />
			<meta name="twitter:image:src" content={social.thumbnail} />

			{/* Structured data */}
			{structuredData ? <script type="application/ld+json">{structuredDataObject}</script> : ''}

		</Helmet>
	)

}

export default PageSEO
