const CreativeWork = props => `

	"@type": "CreativeWork",
	"name": "${props.title}",
	"sameAs": "${props.link}",
	"creator": {
		${props.person}
	}

`;

export default CreativeWork;
