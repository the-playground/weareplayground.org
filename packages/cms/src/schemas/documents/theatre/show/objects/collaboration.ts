export const collaboration = {
    name: 'collaboration',
    title: 'Collaboration',
    description: 'If this show is a collaboration, add the details here',
    options: { collapsible: true, collapsed: true },
    type: 'object',
    fields: [
        {
            name: 'with',
            title: 'What organization is the collaboration with?',
            type: 'reference',
            to: [{ type: 'organization' }],
        },
        {
            name: 'details',
            title: 'Collaboration details',
            type: 'array',
            of: [{ type: 'block', styles: [] }],
        },
    ],
};
