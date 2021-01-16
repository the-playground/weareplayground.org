import { buildConfigDocumentListItem } from './helpers';

const companyConfigListItem = buildConfigDocumentListItem(
    'Company Config',
    'companyConfig'
);

const siteConfigListItem = buildConfigDocumentListItem(
    'Site Config',
    'siteConfig'
);

const linkMapConfigListItem = buildConfigDocumentListItem(
    'Link Map Config',
    'linkMapConfig'
);

const seoConfigListItem = buildConfigDocumentListItem(
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
