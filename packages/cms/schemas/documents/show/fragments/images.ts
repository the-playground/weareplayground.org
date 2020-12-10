export default {
    name: 'images',
    title: 'Images',
    description: 'Core images for representing this show in various places',
    type: 'object',
    options: {
        collapsed: true,
        collapsible: true,
    },
    fields: [
        {
            name: 'hero',
            title: 'Hero Image',
            type: 'image',
        },
        {
            name: 'poster',
            title: 'Poster Image',
            type: 'image',
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'card',
            title: 'Card Image',
            type: 'image',
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            fields: [
                {
                    title: 'Alternative Text',
                    name: 'alt',
                    type: 'string',
                },
            ],
        },
    ],
};
