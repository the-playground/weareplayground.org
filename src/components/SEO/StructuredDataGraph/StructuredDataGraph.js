import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import SEOSchema from './Schema/Schema';

// See Yoast example for how to structure structure data in a graph format.

// `schemas` should be an array of objects

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
			<script type="application/ld+json">{`{
					"@context": "https://schema.org/",
					"@graph": ${schemas.map(schema => <SEOSchema type={schema.type} data={schema.data})} />
				}`}</script>
		</Helmet>
	);
};

SEOStructuredDataGraph.propTypes = {
	schemas: PropTypes.array.isRequired,
};

export default SEOStructuredDataGraph;
