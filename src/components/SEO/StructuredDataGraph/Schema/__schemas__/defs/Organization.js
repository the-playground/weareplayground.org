// Turn an array of founders into an array of Person objects with data
const founders = people => {};

const Organization = ({ props }) => `{

	"@context" : "http://schema.org",
	"@type"	: "Organization",
	"inLanguage": "EN",
	"name": "${props.name}",
	"email": "${props.email}",
	"url" : "${props.url}",
	"logo": "${props.logo?.url}",
	"legalName": "${props.legal?.name}",
	"foundingDate": "${props.legal?.foundingDate}",
	"founders": [
		{
			"@type": "Person",
			"name": "Chris Hahn",
			"jobTitle": "Cofounder & Artistic Director",
			"image": ""
		},
		{
			"@type": "Person",
			"name": "Jenna Valyn",
			"jobTitle": "Cofounder & Artistic Director",
			"image": ""
		},
	],
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "${props.address?.city}",
		"addressRegion": "${props.address?.state}",
    	"postalCode": "${props.address?.zip}"
	},
	"contactPoint" : [{
		"@type" : "ContactPoint",
		"url": "",
		"email": "",
		"contactType" : "general contact",
		"availableLanguage" : "English",
	}],
	sameAs: [
		"${props.social?.facebook}",
		"${props.social?.instagram}",
		"${props.social?.spotify}",
		"${props.social?.youtube}"
	]

}`;

export default Organization;
