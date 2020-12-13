export const schema = {
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
        {
            name: 'seo',
            title: 'SEO',
            type: 'pageSEO',
        },
    ],
};
