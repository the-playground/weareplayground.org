import React from 'react';
import PropTypes from 'prop-types';

// Import all of our schema definitions
import * as schemas from './__schemas__';

/**
 * Component: SEOSchema
 *
 * @description Fetches and returns the requested Structured Data Schema with data
 * @since 1.0.0
 *
 * @param type The type of structured data schema to retrieve
 * @param data
 */

const SEOSchema = (type, data) => {
	// Throw an error and bail if the requested type does not exists
	if (schemas[type] === null) {
		return console.log(`A matching schema could not be found for requested type: ${type}.`);
	}

	// Retrieve schema type since we know it exists
	const schema = schemas[type];

	return <>{schema ? schema(data) : ''}</>;
};

/**
 * ----------
 * Prop Types
 * ----------
 */

const availableSchemaTypes = [
	'Article',
	'CreativeWork',
	'EventCollection',
	'Offer',
	'Organization',
	'Person',
	'Place',
	'TheatreEvent',
	'Video',
	'VideoCollection',
	'Website',
];

SEOSchema.propTypes = {
	type: PropTypes.oneOf(availableSchemaTypes).isRequired,
	data: PropTypes.object.isRequired,
};

export default SEOSchema;
