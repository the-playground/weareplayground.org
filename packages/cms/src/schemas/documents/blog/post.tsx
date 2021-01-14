import { format } from 'date-fns';

import React from 'react';
import { FileText } from 'react-feather';

export const schema = {
    name: 'post',
    title: 'Posts',
    type: 'document',
    icon: () => <FileText />,

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
            name: 'content',
            title: 'Content',
            type: 'contentBlock',
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
