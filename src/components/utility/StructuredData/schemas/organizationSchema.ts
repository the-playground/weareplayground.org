import { SiteConfig } from '@hooks';

/**
 * https://schema.org/Organization
 *
 * @param config The configuration object for the site
 */
export const organizationSchema = (config: SiteConfig): string => {
    const siteURL = config.website?.url;

    return `{
		"@type"	: "Organization",
		"@id":"${siteURL}/#organization",
		"inLanguage": "EN",
		"name": "${config.name}",
		"email": "${config.email}",
		"url" : "${siteURL}",
		"logo": {
			"@type": "ImageObject",
			"@id": "${siteURL}/#logo"
			"url": "${config.logo?.url}",
			"caption": "${config.name}"
		},
		"image": {
			"@id": "${siteURL}/#logo"
		},
		"legalName": "${config.legal_name}",
		"foundingDate": "2015",
		"address": {
			"@type": "PostalAddress",
			"addressCountry": "US",
			"addressLocality": "${config.location_city}",
			"addressRegion": "${config.location_state}",
			"postalCode": "${config.location_zip}"
			"streetAddress": "${config.location_street}",
		},
		"contactPoint" : [{
			"@type" : "ContactPoint",
			"email": "${config.email}",
			"telephone": "${config.phone}"
			"contactType" : "general contact",
			"availableLanguage" : "English",
		}],
		sameAs: [
			"${config.linkedin?.url}",
			"${config.twitter?.url}",
			"${config.github?.url}",
			"${config.medium?.url}"
		]
	}`;
};
