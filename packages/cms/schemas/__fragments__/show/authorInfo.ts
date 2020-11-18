export const authorInfo = {
    name: 'author',
    title: 'Author Info',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'bioLink',
            title: 'Bio Link',
            type: 'url',
        },
        {
            name: 'scriptLink',
            title: 'Script Link',
            type: 'url',
        },
    ],
};
