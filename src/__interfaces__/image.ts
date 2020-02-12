export interface SharpImage {
	childImageSharp: {
		id: string;
		fluid: {
			base64: string | undefined;
			aspectRation: number;
			src: string;
			srcSet: string;
			srcWebp?: string | undefined;
			srcSetWebp?: string | undefined;
			sizes: string;
		}
	}
}

export interface Image {
	dimensions: {
		width: number | undefined;
		height: number | undefined;
	};
	alt: string | undefined;
	copyright: string | undefined;
	url: string;
}

export interface ResponsiveImage extends Image {
	mobileRetina?: Image;
}
