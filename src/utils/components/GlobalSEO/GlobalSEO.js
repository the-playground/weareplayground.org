import React from 'react';
import Helmet from 'react-helmet'

const GlobalSEO = ({ props }) => {

	return (
		<Helmet>

			{/* Default language and direction */}
			<html lang="en" dir="ltr" />

			<meta name="google-site-verification" content="code" />
			<meta name="msvalidate.01" content="code" />
			<meta name="norton-safeweb-site-verification" content="code" />

			<meta name="geo.region" content="US-OH" />
			<meta name="geo.placename" content="Dayton" />

			{/*Global OpenGraph meta */}
			<meta property="og:type" content='website' />
			<meta property="og:sitename" content='The Playground' />
			<meta name="og:email" content={props.email}/>
			<meta name="og:country-name" content="USA"/>
			<meta name="og:region" content="OH" />
			<meta name="og:postal-code" content={props.zip} />

		</Helmet>
	)

}

export default GlobalSEO
