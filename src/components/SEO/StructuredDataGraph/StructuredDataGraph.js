import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

// See Yoast example for how to structure structure data in a graph format.

// `schemas` should be an array of objects

const SEOStructuredDataGraph = ({ schemas }) => {
	const dataGraph = `{
		"@context": "https://schema.org/",
		"@graph": ${schemas}
	}`;

	return <Helmet>{schemas ? <script type="application/ld+json">{dataGraph}</script> : ''}</Helmet>;
};

SEOStructuredDataGraph.propTypes = {
	schemas: PropTypes.array.isRequired,
};

export default SEOStructuredDataGraph;
