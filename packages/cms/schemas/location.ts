export const locationSchema = {
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
            type: 'object',
            fields: [
                {
                    name: 'street',
                    title: 'Street',
                    type: 'string',
                },
                {
                    name: 'city',
                    title: 'City',
                    type: 'string',
                },
                {
                    name: 'state',
                    title: 'State',
                    type: 'string',
                },
                {
                    name: 'zipcode',
                    title: 'Zipcode',
                    type: 'string',
                },
            ],
        },
        {
            name: 'Geolocation',
            title: 'geolocation',
            type: 'geopoint',
        },
        {
            name: 'parkingInfo',
            title: 'Parking Info',
            type: 'array',
            of: [{ type: 'block', styles: [] }],
        },
    ],
};
