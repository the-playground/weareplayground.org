import React from 'react'
import Head from 'next/head'

// See Yoast example for how to structure structure data in a graph format.

// `schemas` should be an array of objects

const SEOStructuredDataGraph = (schemas) => {

	const dataGraph = `{
		"@context": "https://schema.org/",
		"@graph": ${schemas}
	}`

	return (

		<Head>

			{ schemas ? <script type="application/ld+json">{dataGraph}</script> : '' }

		</Head>
	)

}

export default SEOStructuredDataGraph
