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
		"email": "${config.contact_email}",
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
		"foundingDate": "2014",
		"address": {
			"@type": "PostalAddress",
			"addressCountry": "US",
			"addressLocality": "${config.location_city}",
			"addressRegion": "${config.location_state}",
			"postalCode": "${config.location_zip}"
		},
		"contactPoint" : [{
			"@type" : "ContactPoint",
			"email": "${config.contact_email}",
			"contactType" : "general contact",
			"availableLanguage" : "English",
		}],
		sameAs: [
			"https://theplaygroundtheatre.org"
			"${config.facebook?.url}",
			"${config.instagram?.url}",
			"${config.spotify?.url}",
		],
		founders: [
			{
				"@type": "Person",
				"givenName": "Chris",
				"familyName": "Hahn"
				"birthPlace": "",
				"jobTitle": "Artistic Director",
				"email": "",
			},
			{
				"@type": "Person",
				"givenName": "Jenna",
				"familyName": "Burnette",
				"birthPlace": "",
				"jobTitle": "Artistic Director",
				"email": "",
			}
		]
	}`;
};
