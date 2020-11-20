export default [
    {
        name: 'description',
        title: 'Description',
        type: 'array',
        validation: (Rule: any) => Rule.required(),
        of: [{ type: 'block', styles: [] }],
        fieldset: 'basic',
    },
    {
        name: 'teaser',
        title: 'Teaser',
        type: 'array',
        of: [{ type: 'block', styles: [] }],
        fieldset: 'basic',
    },
    {
        name: 'tagline',
        title: 'Tagline',
        type: 'string',
        fieldset: 'basic',
    },
    {
        name: 'hashtag',
        title: 'Hashtag',
        type: 'string',
        fieldset: 'basic',
    },
];
