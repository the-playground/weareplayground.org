export const simpleInternalAction = {
    name: 'simpleInternalAction',
    title: 'Action',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'reference',
            to: [
                { type: 'season' },
                { type: 'show' },
                { type: 'post' },
                { type: 'archivePage' },
                { type: 'blogPage' },
            ],
        },
    ],
};

export const simpleExternalAction = {
    name: 'simpleExternalAction',
    title: 'Action',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
            validation: (Rule: any) =>
                Rule.required().uri({
                    scheme: ['https'],
                }),
        },
    ],
};
