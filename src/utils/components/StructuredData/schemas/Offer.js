// https://schema.org/Offer

export const Offer = ( props ) => `

	"@context" : "http://schema.org",
	"@type"	: "Offer",
	"price": "${props.price}",
	"priceCurrency": "USD",
	"url": "${props.url}"

`;
