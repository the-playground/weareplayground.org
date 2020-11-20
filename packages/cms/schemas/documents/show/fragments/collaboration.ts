export default {
    name: 'collaboration',
    title: 'Collaboration Setup',
    description: 'If this show is a collaboration, add the details here',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'with',
            title: 'What organization is the collaboration with?',
            type: 'reference',
            to: [{ type: 'organization' }],
        },
        {
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [{ type: 'block', styles: [] }],
        },
    ],
};
