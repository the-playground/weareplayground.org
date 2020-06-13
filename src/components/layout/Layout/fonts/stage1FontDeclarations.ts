/**
 * Stage 1 Font face declarations. These should ultimately be embedded via an
 * inline style tag via SSR. It should not rely on runtime JS,
 */
export const stage1FontDeclarations = `

    /* Heading Font -- Assistant */
    @font-face {
		font-family: "Assistant";
		src: local('Assistant ExtraBold'),
			local('Assistant-ExtraBold'),
            url('/fonts/stage-1/Assistant-ExtraBold--stage1.woff2') format('woff2'),
            url('/fonts/stage-1/Assistant-ExtraBold--stage1.woff') format('woff');
		font-weight: 800;
		font-display: swap;
	}

    /* Body Font -- Greycliff CF */
    @font-face {
		font-family: "Greycliff";
        src: local('Greycliff CF Regular'),
            url('/fonts/stage-1/GreycliffCF-Regular--stage1.woff2') format('woff2'),
		    url('/fonts/stage-1/GreycliffCF-Regular--stage1.woff') format('woff');
		font-weight: 400;
		font-display: swap;
	}

	@font-face {
		font-family: "Greycliff";
        src: local('Greycliff CF Bold'),
            url('/fonts/stage-1/GreycliffCF-Bold--stage1.woff2') format('woff2'),
		    url('/fonts/stage-1/GreycliffCF-Bold--stage1.woff') format('woff');
		font-weight: 700;
		font-display: swap;
	}
`;
