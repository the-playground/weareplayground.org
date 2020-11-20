/**
 * An object for managing SEO at a page level.
 *
 * Allows you to set meta title, description, image, etc.
 */
export const pageSEO = {
    name: 'pageSEO',
    title: 'SEO Configuration',
    descriptions: 'Optimize this document for search engines',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'hide',
            title: 'Hide Document?',
            description:
                'Do you want to hide this document from search engines?',
            type: 'boolean',
        },
        {
            name: 'title',
            title: 'Meta Title',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(30).max(70),
        },
        {
            name: 'description',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            validation: (Rule: any) => Rule.required().min(50).max(160),
        },
        {
            name: 'image',
            title: 'Meta Image',
            type: 'image',
            options: {
                accept: '.jpg',
            },
        },
    ],
};
