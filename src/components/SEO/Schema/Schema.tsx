import React from 'react';

// Import Typescript Interfaces
import { SchemaProps, AvailableSchemaTypes } from './Schema.interfaces';

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

const SEOSchema: React.FC<SchemaProps> = ({ type, data }) => {
	// Throw an error and bail if the requested type does not exists
	if (!schemas[type as AvailableSchemaTypes]) {
		console.log(`A matching schema could not be found for requested type: ${type}. Requested schemas not generated`);
		return <></>;
	}

	// Retrieve schema type since we know it exists
	const schema: CallableFunction = schemas[type as AvailableSchemaTypes];

	console.log(schema);

	return <>{schema ? schema(data) : ``}</>;
};

export default SEOSchema;
