export const schema = {
    name: 'location',
    title: 'Locations',
    type: 'document',
    icon: (): string => '',
    fields: [
        {
            name: 'title',
            title: 'Location Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'address',
            title: 'Address',
            type: 'address',
        },
        {
            name: 'Geolocation',
            title: 'geolocation',
            type: 'geopoint',
        },
        {
            name: 'directions',
            title: 'Directions',
            type: 'array',
            of: [{ type: 'block', styles: [] }],
        },
        {
            name: 'parking',
            title: 'Parking',
            type: 'array',
            of: [{ type: 'block', styles: [] }],
        },
    ],
};
