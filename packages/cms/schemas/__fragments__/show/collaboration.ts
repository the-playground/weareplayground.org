export const collaboration = {
    name: 'collaboration',
    title: 'Collaboration Setup',
    description: 'If this show is a collaboration, add the details here',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
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
