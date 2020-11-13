import { performance } from './__fragments__/show';

export const showSchema = {
    name: 'show',
    title: 'Shows',
    type: 'document',
    icon: (): string => '🎭',
    fields: [
        {
            name: 'title',
            title: 'Show Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                slugify: (input: string): string =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        },
        {
            name: 'performances',
            title: 'Performances',
            type: 'array',
            options: {
                collapsible: true,
                collapsed: true,
            },
            of: [performance],
        },
    ],
};
