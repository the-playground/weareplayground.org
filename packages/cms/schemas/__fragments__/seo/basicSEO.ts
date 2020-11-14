export const basicSEO = {
    name: 'basicSEO',
    title: 'Basic SEO',
    descriptions: '',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'title',
            title: 'Meta Title',
            type: 'string',
            validation: (Rule) => Rule.required().min(40).max(70),
        },
        {
            name: 'description',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().min(50).max(160),
        },
        {
            name: 'hide',
            title: 'Hide Document?',
            description:
                'Do you want to hide this document from search engines?',
            type: 'boolean',
        },
    ],
};
