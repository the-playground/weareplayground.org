import React from 'react';
import { Hexagon } from 'react-feather';

import { DocumentCollection } from '../../../types';

export const schema: DocumentCollection = {
    name: 'season',
    title: 'Seasons',
    icon: <Hexagon />,
    fields: [
        {
            name: 'title',
            title: 'Season Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Season Slug',
            type: 'slug',
            options: {
                source: 'title',
                slugify: (input: string): string =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'doNotDisplay',
            title: 'Do not display on website',
            description:
                'Toggling this on will prevent this season from being displayed on the frontend of the website.',
            type: 'boolean',
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        },
        {
            name: 'hashtag',
            title: 'Hashtag',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'shows',
            title: 'Shows',
            description: 'The shows that were a part of this season',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'show' } }],
        },
    ],
    orderings: [
        {
            title: 'Season, Newest to Oldest',
            name: 'title',
            by: [{ field: 'title', direction: 'desc' }],
        },
    ],
    initialValue: {
        doNotDisplay: false,
    },
    preview: {
        select: {
            title: 'title',
            subtitle: 'tagline',
            media: 'seo.image',
        },
    },
};
