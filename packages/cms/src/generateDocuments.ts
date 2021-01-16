/**
 * ! Please create final instances of all schemas in this file !
 *
 * Instead of creating schemas directly in the schemas folder and then repeating
 * ourselves in building out our Sanity Structure, we are killing 2 birds with 1 stone here.
 *
 * All of our documents are generated using helper function. These helper functions
 * generate fully hydrated schemas that can then be exported to be consumed later.
 *
 * At the same time, we are capturing and exporting the IDs and Titles of
 * the documents we just generated. This information can be directly consumed
 * by the Sanity Structure Builder to build out our custom UI without repeating
 * any document-related information.
 *
 * This also gives us 1:1 parity between our schema information and the
 * information being used by Structure Builder, reducing the possibility of
 * mistakes and speeding up development time.
 */

import {
    createConfigDocument,
    createPageDocument,
    createDocumentCollection,
    getCreatedDocumentMeta,
    getCreatedDocumentIDs,
} from './lib/createDocument';

import { configDocuments } from './schemas/documents/configs';
import { blogDocuments } from './schemas/documents/blog';
import { theatreObjects, theatreDocuments } from './schemas/documents/theatre';
import { pageDocuments } from './schemas/documents/pages';

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
const createdPageDocuments = pageDocuments.map((settings) =>
    createPageDocument(settings)
);

// get the schema property to send to sanity
const pageSchemas = createdPageDocuments.map((schema) => schema.schema);

// get an array of titles with ids
export const pageDocumentsMeta = getCreatedDocumentMeta(createdPageDocuments);

// get an array of document ids
export const pageDocumentIDs = getCreatedDocumentIDs(createdPageDocuments);

/**
 * **********************
 * Array of fully generated schemas to be passed to Sanity's `createSchema`
 * **********************
 */
export const generatedSchemas = [
    ...configSchemas,
    ...blogSchemas,
    ...theatreObjects,
    ...theatreSchemas,
    ...pageSchemas,
];
