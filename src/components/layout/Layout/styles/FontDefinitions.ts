/**
 * Stage 1 Font face declarations. These should ultimately be embedded via an
 * inline style tag via SSR. It should not rely on runtime JS,
 */
export const FontDefinitions = `

    /* Heading Font -- Inter */
    @font-face {
		font-family: "Inter";
		src: local('Inter Black'),
            url('/fonts/inter-black.woff2') format('woff2'),
            url('/fonts/inter-black.woff') format('woff');
		font-weight: 900;
		font-display: swap;
	}

    /* Body Font Bold -- Inter */
    @font-face {
		font-family: "Inter";
        src: local('Inter Semibold'),
            url('/fonts/inter-semibold.woff2') format('woff2'),
		    url('/fonts/inter-semibold.woff') format('woff');
		font-weight: 600;
		font-display: swap;
	}

    /* Body Font Common -- Inter */
	@font-face {
		font-family: "Inter";
        src: local('Inter Regular'),
            url('/fonts/inter-regular.woff2') format('woff2'),
		    url('/fonts/inter-regular.woff') format('woff');
		font-weight: 400;
		font-display: swap;
	}
`;
