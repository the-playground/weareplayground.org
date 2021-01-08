import { CompanyConfig } from '@nerve/shared/hooks';

/**
 * https://schema.org/WebSite
 *
 * @param config The configuration object for the site
 */
export const webSiteSchema = (config: CompanyConfig): string => {
    const siteURL = config.website;

    const schema = {
        '@type': 'Website',
        '@id': `${siteURL}/#website`,
        url: siteURL,
        name: config.name,
        publisher: { '@id': `${siteURL}/#organization` },
        copyrightYear: '2014',
        copyrightHolder: {
            '@id': `${siteURL}/#organization`,
        },
    };

    return JSON.stringify(schema);
};
