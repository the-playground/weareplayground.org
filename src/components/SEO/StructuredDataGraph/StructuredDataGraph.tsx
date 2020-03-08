import React from 'react';
import Helmet from 'react-helmet';

// Import Typescript Interfaces

// See yoast.com example for how to structure structure data in a graph format.

// `schemas` should be an array of react components

const SEOStructuredDataGraph = ({ schemas }) => {
    if (!schemas) {
        return;
    }

    const dataGraph = `{
		"@context": "https://schema.org/",
		"@graph": ${schemas}
	}`;

    return (
        <Helmet>
            <script type="application/ld+json">{dataGraph}</script>
        </Helmet>
    );
};

export default SEOStructuredDataGraph;
