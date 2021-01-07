// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Site Configs
import { configSchemas } from './documents/configs';

// Other DOcument Schemas
import { schema as authorSchema } from './documents/author';
import { schema as artistSchema } from './documents/artist';
import { schema as postSchema } from './documents/post';
import { schema as locationSchema } from './documents/location';
import { schema as showSchema, objects as showObjects } from './documents/show';
import { schema as seasonSchema } from './documents/season';
import { schema as organizationSchema } from './documents/organization';

import globalObjects from './objects';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        ...configSchemas,
        artistSchema,
        authorSchema,
        postSchema,
        showSchema,
        ...showObjects,
        seasonSchema,
        locationSchema,
        organizationSchema,
        ...globalObjects,
    ]),
});
