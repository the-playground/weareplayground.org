export const schema = {
    name: 'siteConfig',
    title: 'Site Config',
    type: 'document',
    icon: (): string => '',
    // __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
    ],
};
