export const subscribe = {
    name: 'subscribe',
    title: 'Subscribe Component',
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
            name: 'copy',
            title: 'Copy',
            type: 'text',
            rows: 3,
        },
        {
            name: 'image',
            type: 'image',
        },
    ],
};
