export const orgSchema = {
    name: 'organization',
    title: 'Organizations',
    type: 'document',
    icon: (): string => '',
    fields: [
        {
            name: 'title',
            title: 'Organization Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Organization Description',
            type: 'text',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
        {
            name: 'website',
            title: 'Website',
            type: 'url',
        },
    ],
};
