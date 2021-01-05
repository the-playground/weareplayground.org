export const contentBlock = {
    name: 'contentBlock',
    title: 'Content Block',
    type: 'array',
    of: [
        {
            type: 'block',
            styles: [
                { title: 'Paragraph', value: 'normal' },
                { title: 'Heading 2', value: 'h2' },
                { title: 'Heading 3', value: 'h3' },
                { title: 'Heading 4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Underline', value: 'underline' },
                ],
                annotations: [
                    {
                        type: 'externalLink',
                    },
                    {
                        type: 'internalLink',
                    },
                ],
            },
        },
        { type: 'imageWithFullMeta' },
    ],
    validation: (Rule: any) => Rule.required(),
};
