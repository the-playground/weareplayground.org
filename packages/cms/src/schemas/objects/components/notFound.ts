export const notFound = {
    name: 'notFound',
    title: 'Not Found Component (404)',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            rows: 3,
        },
        {
            name: 'actionText',
            type: 'string',
        },
    ],
};
