import { pageSEO } from '../shared';

export default {
    name: 'season',
    title: 'Seasons',
    type: 'document',
    icon: (): string => '',
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
        pageSEO,
        {
            name: 'legacy',
            title: 'Legacy Options',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
                {
                    name: 'url',
                    title: 'Legacy URL',
                    description:
                        'The URL for this season on the Playground website',
                    type: 'url',
                    validation: (Rule: any) =>
                        Rule.uri({
                            scheme: ['https'],
                        }),
                },
            ],
        },
    ],
};
