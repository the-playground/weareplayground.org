import {
    createConfigDocument,
    createDocumentCollection,
    getCreatedDocumentMeta,
    getCreatedDocumentIDs,
} from './lib/createDocument';

import { configDocuments } from './schemas/documents/configs';
import { blogDocuments } from './schemas/documents/blog';
import { theatreObjects, theatreDocuments } from './schemas/documents/theatre';
import { pageDocuments } from './schemas/documents/pages';

// TODO -- find a better and more extensible way to generate new schemas
// TODO -- Find a way to split out data being sent to schemas in Sanity vs Structure Builder (id, name & array of filters)

/**
 * **********************
 * Document Group: Config
 * **********************
 */
const createdConfigDocuments = configDocuments.map((settings) =>
    createConfigDocument(settings)
);

// get the schema property to send to sanity
const configSchemas = createdConfigDocuments.map((schema) => schema.schema);

// get an array of titles with ids
export const configDocumentMeta = getCreatedDocumentMeta(
    createdConfigDocuments
);

// get an array of document ids
export const configDocumentIDs = getCreatedDocumentIDs(createdConfigDocuments);

/**
 * **********************
 * Document Group: Blog
 * **********************
 */

const createdBlogDocuments = blogDocuments.map((settings) =>
    createDocumentCollection(settings)
);

// get the schema property to send to sanity
const blogSchemas = createdBlogDocuments.map((schema) => schema.schema);

// get an array of titles with ids
export const blogDocumentsMeta = getCreatedDocumentMeta(createdBlogDocuments);

// get an array of document ids
export const blogDocumentIDs = getCreatedDocumentIDs(createdBlogDocuments);

/**
 * **********************
 * Document Group: Theatre
 * **********************
 */
const createdTheatreDocuments = theatreDocuments.map((settings) =>
    createDocumentCollection(settings)
);

// get the schema property to send to sanity
const theatreSchemas = createdTheatreDocuments.map((schema) => schema.schema);

// get an array of titles with ids
export const theatreDocumentsMeta = getCreatedDocumentMeta(
    createdTheatreDocuments
);

// get an array of document ids
export const theatreDocumentIDs = getCreatedDocumentIDs(
    createdTheatreDocuments
);

/**
 * **********************
 * Document Group: Single Pages
 * **********************
 */

/**
 * Array of fully generated schemas
 */
export const schemas = [
    ...configSchemas,
    ...blogSchemas,
    ...theatreObjects,
    ...theatreSchemas,
];
