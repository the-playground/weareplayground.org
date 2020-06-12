// https://schema.org/Offer

const Offer = props => `

	"@context" : "http://schema.org",
	"@type"	: "Offer",
	"price": "${props.price}",
	"priceCurrency": "USD",
	"url": "${props.url}"

`;

export default Offer;
