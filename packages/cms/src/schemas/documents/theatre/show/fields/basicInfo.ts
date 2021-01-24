export default [
    {
        name: 'description',
        title: 'Description',
        type: 'array',
        validation: (Rule: any) => Rule.required(),
        of: [{ type: 'block', styles: [] }],
    },
    {
        name: 'teaser',
        title: 'Teaser',
        type: 'array',
        of: [{ type: 'block', styles: [] }],
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
];
