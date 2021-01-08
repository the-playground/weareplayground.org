import { buildDocumentSingletonListItem } from './helpers';

const companyConfigListItem = buildDocumentSingletonListItem(
    'Company Config',
    'companyConfig'
);

const siteConfigListItem = buildDocumentSingletonListItem(
    'Site Config',
    'siteConfig'
);

const linkMapConfigListItem = buildDocumentSingletonListItem(
    'Link Map Config',
    'linkMapConfig'
);

const seoConfigListItem = buildDocumentSingletonListItem(
    'SEO Config',
    'seoConfig'
);

export const configListItems = [
    siteConfigListItem,
    companyConfigListItem,
    seoConfigListItem,
    linkMapConfigListItem,
];

export const configDocumentFilterList = [
    'companyConfig',
    'siteConfig',
    'linkMapConfig',
    'seoConfig',
];
