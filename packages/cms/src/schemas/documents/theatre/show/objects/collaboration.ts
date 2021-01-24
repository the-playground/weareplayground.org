export const collaboration = {
    name: 'collaboration',
    title: 'Collaboration',
    description: 'If this show is a collaboration, add the details here',
    options: { collapsible: true, collapsed: true },
    type: 'object',
    fields: [
        {
            name: 'is',
            title: 'This show is a collaboration',
            description:
                'Turn "on" if this show is a collaborative effort with another company',
            type: 'boolean',
            validation: (Rule: any) => Rule.required(),
        },
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
