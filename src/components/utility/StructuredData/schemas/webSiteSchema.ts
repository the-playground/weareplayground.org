import { SiteConfig } from '@hooks';

/**
 * https://schema.org/WebSite
 *
 * @param config The configuration object for the site
 */
export const webSiteSchema = (config: SiteConfig): string => {
    const siteURL = config.website?.url;

    return `{
		"@type"	: "Website",
		"@id": "${siteURL}/#website",
		"url" : "${siteURL}",
		"name": "${config.name}",
		"publisher": {"@id": ${siteURL}/#organization"},
		"copyrightYear": "2014",
		"copyrightHolder": {"@id": ${siteURL}/#organization"},
	}`;
};
