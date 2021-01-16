export const simpleHeroSection = {
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
            type: 'string',
        },
    ],
};

export const simpleHeroSectionWithImage = {
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
            type: 'string',
        },
        {
            name: 'backgroundImage',
            title: 'background Image',
            type: 'image',
        },
    ],
};
