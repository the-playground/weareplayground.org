import { PageDocument } from '../../../types';

export const schema: PageDocument = {
    name: 'homePage',
    title: 'Home',
    icon: '',
    disabledActions: ['create', 'delete'],
    fields: [
        {
            name: 'hero',
            title: 'Hero Section',
            type: 'heroWithImage',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
    ],
};
