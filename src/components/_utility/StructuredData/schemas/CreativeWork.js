const creativeWork = (props) => `

	"@type": "CreativeWork",
	"name": "${props.title}",
	"sameAs": "${props.link}",
	"creator": {
		${props.person}
	}

`;
