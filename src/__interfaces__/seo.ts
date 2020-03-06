export interface PageMeta {
	type: string;
	primary: {
		meta_description: string;
		meta_image: {} | undefined;
		meta_title: string;
		twitter_card_image: string;
	};
}

export type AvailableSchemaType =
	| `Article`
	| `CreativeWork`
	| `EventCollection`
	| `Offer`
	| `Organization`
	| `Person`
	| `Place`
	| `TheatreEvent`
	| `Video`
	| `VideoCollection`
	| `Website`;

export interface StructuredDataGraphProps {
	schemas: AvailableSchemaType[];
}
