import { ConfigDocument } from '../../../types';

export const schema: ConfigDocument = {
    name: 'linkMapConfig',
    title: 'Link Map Config',
    icon: '',
    disabledActions: ['create', 'delete'],
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
