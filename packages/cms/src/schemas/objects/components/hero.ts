/**
 * Hero Sections with some text and possibly a background image
 */
export const simpleHero = {
    name: 'simpleHero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'subtitle',
            type: 'text',
            rows: 3,
        },
    ],
};

export const simpleHeroWithImage = {
    name: 'simpleHeroWithImage',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            rows: 3,
        },
        {
            name: 'image',
            title: 'Background Image',
            type: 'image',
        },
    ],
};

/**
 * Hero Sections with some text, an action, and possibly a background image
 */
export const hero = {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'subtitle',
            type: 'text',
            rows: 3,
        },
        {
            name: 'action',
            title: 'Action',
            type: 'simpleInternalAction',
        },
    ],
};

export const heroWithImage = {
    name: 'heroWithImage',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'subtitle',
            type: 'text',
            rows: 3,
        },
        {
            name: 'action',
            title: 'Action',
            type: 'simpleInternalAction',
        },
        {
            name: 'image',
            title: 'Background Image',
            type: 'image',
        },
    ],
};
