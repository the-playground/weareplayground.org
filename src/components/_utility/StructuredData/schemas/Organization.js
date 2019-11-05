import {Person} from './Person';

// Turn an array of founders into an array of Person objects with data
const founders = ( people ) => {

}

export const Organization = ( props ) => `

	"@context" : "http://schema.org",
	"@type"	: "Organization",
	"inLanguage": "EN",
	"name": "${props.name}",
	"email": "${props.email}",
	"url" : "${props.url}",
	"logo": "${props.logo}",
	"legalName": "${props.legal.name}",
	"taxID": "${props.legal.ein}",
	"foundingDate": "${props.legal.foundingDate}",
	"founders": [
		{
			"@type": "Person",
			"name": "Christopher Hahn"
		},
		{
			"@type": "Person",
			"name": "Jenna Burnette"
		},
	],
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "${props.address.city}",
		"addressRegion": "${props.address.state}",
    	"postalCode": "${props.address.zip}"
	},
	sameAs: [
		"https://theplaygroundtheatre.org",
		"${props.social.facebook}",
		"${props.social.instagram}",
		"${props.social.spotify}"
	]

`;
