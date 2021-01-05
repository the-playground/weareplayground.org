import { format } from 'date-fns';

export const schema = {
    name: 'post',
    title: 'Posts',
    type: 'document',
    icon: (): string => '',

    fields: [
        {
            name: 'title',
            title: 'Post Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Post Slug',
            type: 'slug',
            options: {
                source: 'title',
                slugify: (input: string): string =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'author' } }],
        },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'imageWithAlt',
        },
        {
            name: 'tldr',
            title: 'TLDR',
            type: 'text',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Paragraph', value: 'normal' },
                        { title: 'Heading 2', value: 'h2' },
                        { title: 'Heading 3', value: 'h3' },
                        { title: 'Heading 4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Underline', value: 'underline' },
                        ],
                    },
                },
                { type: 'imageWithFullMeta' },
            ],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'pageSEO',
        },
    ],
    initialValue: {
        seo: {
            publishedAt: new Date().toISOString(),
        },
    },
    preview: {
        select: {
            title: 'title',
            subtitle: 'seo.publishedAt',
            media: 'featuredImage',
        },
        prepare({ title, subtitle, media }: any) {
            return {
                title,
                subtitle: `Published on: ${format(
                    new Date(subtitle),
                    'MMM do, yyyy'
                )}`,
                media,
            };
        },
    },
};
