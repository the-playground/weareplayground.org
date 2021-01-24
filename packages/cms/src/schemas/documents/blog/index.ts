import { schema as authorSchema } from './author';
import { schema as postSchema } from './post';

export const blogDocuments = [authorSchema, postSchema];
