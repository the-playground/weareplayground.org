export type AvailableSchemaTypes =
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

export interface SchemaProps {
	type: AvailableSchemaTypes;
	data: JSON;
}
