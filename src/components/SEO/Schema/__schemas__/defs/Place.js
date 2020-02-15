const Place = props => `

	"@context": "http://schema.org",
	"@type": "Place",
	"name": "${props.name}",
	"address": {
		"@type": "PostalAddress",
        "addressLocality": "${props.city}",
        "addressRegion": "${props.state}",
        "postalCode": "${props.zip}",
        "streetAddress": "${props.street}"
	},
	"geo": {
		"@type": "GeoCoordinates",
		"latitude": "${props.latitude}",
		"longitude": "${props.longitude}"
	},
	"url": "${props.url ? props.url : ``}",

`;
export default Place;
