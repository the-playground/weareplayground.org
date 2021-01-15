import { schema as companyConfigSchema } from './companyConfig';
import { schema as linkMapConfigSchema } from './linkMapConfig';
import { schema as siteConfigSchema } from './siteConfig';
import { schema as seoConfigSchema } from './seoConfig';

export const configDocuments = [
    companyConfigSchema,
    siteConfigSchema,
    linkMapConfigSchema,
    seoConfigSchema,
];
