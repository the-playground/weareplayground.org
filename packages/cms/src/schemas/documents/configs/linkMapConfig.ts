import { ConfigDocument } from '../../../types';

export const schema: ConfigDocument = {
    name: 'linkMapConfig',
    title: 'Link Map Config',
    icon: '',
    disabledActions: ['create', 'delete'],
    fields: [
        {
            name: 'showArchivePage',
            title: 'The Archive Page',
            type: 'reference',
            to: [{ type: 'archivePage' }],
        },
        {
            name: 'blogPage',
            title: 'Blog Page',
            type: 'reference',
            to: [{ type: 'blogPage' }],
        },
        {
            name: 'sitemap',
            title: 'Sitemap',
            type: 'url',
        },
    ],
};
