import * as showSchemaFragment from './__fragments__/show';
import * as seoSchemaFragment from './__fragments__/seo';

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
            name: 'openDate',
            title: 'Opening Date',
            description: 'The date of the first performance',
            type: 'datetime',
            readOnly: true,
            options: {
                dateFormat: 'ddd » YYYY-MM-DD',
                timeFormat: 'h:mm:a',
                timeStep: 30,
            },
        },
        {
            name: 'closingDate',
            title: 'Closing Date',
            description: 'The date of the last performance',
            type: 'datetime',
            readOnly: true,
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'h:mm:a',
                timeStep: 30,
            },
        },
        showSchemaFragment.performance,
        seoSchemaFragment.basicSEO,
        showSchemaFragment.legacyOptions,
    ],
};
