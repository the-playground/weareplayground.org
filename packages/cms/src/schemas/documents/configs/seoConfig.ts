export const schema = {
    name: 'seoConfig',
    title: 'SEO Config',
    type: 'document',
    icon: (): string => '',
    // __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
    ],
};
