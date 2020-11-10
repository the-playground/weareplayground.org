export default {
    name: 'show',
    title: 'Shows',
    type: 'document',
    icon: () => '🎭',
    fields: [
        {
            name: 'title',
            title: 'Show Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        },
    ],
};
