export const schema = {
    name: 'linkMapConfig',
    title: 'Link Map Config',
    type: 'document',
    icon: (): string => '',
    __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'currentSeason',
            title: 'Current Season',
            type: 'reference',
            to: [{ type: 'season' }],
        },
        {
            name: 'currentShow',
            title: 'Current Show',
            type: 'reference',
            to: [{ type: 'show' }],
        },
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
