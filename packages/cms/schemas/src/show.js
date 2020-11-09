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
        {
            name: 'performances',
            title: 'Performances',
            type: 'array',
            of: [
                {
                    name: 'performance',
                    title: 'Performance',
                    type: 'object',
                    fields: [
                        {
                            name: 'datetime',
                            title: 'Date & Time',
                            type: 'datetime',
                            options: {
                                dateFormat: 'MM-DD-YYYY',
                                timeFormat: 'h:mm:a',
                                timeStep: 30,
                            },
                            validation: {
                                required: true,
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
