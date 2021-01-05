export const imageWithAlt = {
    name: 'imageWithAlt',
    title: 'Image',
    type: 'image',
    fields: [
        {
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
            description: 'Important for SEO and accessiblity.',
            validation: (Rule: any) =>
                Rule.error(
                    'You have to fill out the alternative text.'
                ).required(),
            options: {
                isHighlighted: true,
            },
        },
    ],
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'alt',
        },
    },
};

export const imageWithFullMeta = {
    name: 'imageWithFullMeta',
    title: 'Image',
    type: 'image',
    fields: [
        {
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
            description: 'Important for SEO and accessiblity.',
            validation: (Rule: any) =>
                Rule.error(
                    'You have to fill out the alternative text.'
                ).required(),
            options: {
                isHighlighted: true,
            },
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
                isHighlighted: true,
            },
        },
        {
            title: 'Credit',
            name: 'credit',
            type: 'string',
            options: {
                isHighlighted: true,
            },
        },
    ],
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'caption',
            subtitle: 'credit',
        },
    },
};
