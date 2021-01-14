export const schema = {
    name: 'linkMapConfig',
    title: 'Link Map Config',
    type: 'document',
    icon: (): string => '',
    __experimental_actions: ['update', 'publish'],
    fields: [
        // {
        //     name: 'showArchive',
        //     title: 'The Archive',
        // },
        {
            name: 'sitemap',
            title: 'Sitemap',
            type: 'url',
        },
    ],
};
