import { PageDocument } from '../../../types';

export const schema: PageDocument = {
    name: 'archivePage',
    title: 'The Archive',
    icon: '',
    disabledActions: ['create', 'delete'],
    fields: [
        {
            name: 'hero',
            title: 'Hero',
            type: 'simpleHero',
        },
    ],
};
