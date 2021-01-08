import React from 'react';
import { Hexagon } from 'react-feather';

export const schema = {
    name: 'season',
    title: 'Seasons',
    type: 'document',
    icon: () => <Hexagon />,

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
        {
            name: 'seo',
            title: 'SEO',
            type: 'pageSEO',
        },
    ],
    orderings: [
        {
            title: 'Season, Newest to Oldest',
            name: 'title',
            by: [{ field: 'title', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'tagline',
            media: 'seo.image',
        },
    },
};
