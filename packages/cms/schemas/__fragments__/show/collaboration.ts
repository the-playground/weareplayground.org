export const collaboration = {
    name: 'collaboration',
    title: 'Collaboration Setup',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'is',
            title: 'This is a collaboration',
            description: 'Set to "true" if this show is a collaborative effort',
            type: 'boolean',
            validation: (Rule: any) => Rule.required(),
        },
        // {
        //     name: 'with',
        //     title: 'With',
        //     type: 'reference',
        //     to: [{ type: 'company' }],
        // },
        {
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [{ type: 'block', styles: [] }],
        },
    ],
};
