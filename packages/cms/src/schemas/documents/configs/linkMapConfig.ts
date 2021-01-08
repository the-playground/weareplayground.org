export const schema = {
    name: 'linkMapConfig',
    title: 'Link Map Config',
    type: 'document',
    icon: (): string => '',
    __experimental_actions: ['update', 'publish'],
    fields: [
        // {
        //     name: 'currentSeason',
        //     title: 'Current Season',
        // },
        // {
        //     name: 'currentShow',
        //     title: 'Current Show',
        // },
        // {
        //     name: 'showArchive',
        //     title: 'The Archive',
        // },
        // {
        //     name: 'about',
        //     title: 'About Page',
        // },
        {
            name: 'sitemap',
            title: 'Sitemap',
            type: 'url',
        },
    ],
};
