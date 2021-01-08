import React from 'react';
import { MapPin } from 'react-feather';

export const schema = {
    name: 'location',
    title: 'Locations',
    type: 'document',
    icon: () => <MapPin />,
    fields: [
        {
            name: 'title',
            title: 'Location Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'googleTitle',
            title: 'Location Google Title',
            description:
                'The name of the location as it appears in Google Maps. This helps improve user experience when opening directions links by providing a "named" destination instead of just an address. IMPORTANT NOTE: This must be a valid business name and match what Google has on file for this business. Leave empty if at all unsure.',
            type: 'string',
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
    preview: {
        select: {
            title: 'title',
            address: 'address',
        },
        prepare({ title, address }: any) {
            return {
                title,
                subtitle: `${address.street} ${address.city}, ${address.state}`,
            };
        },
    },
};
