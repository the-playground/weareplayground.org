import { ConfigDocument } from '../../../types';

export const schema: ConfigDocument = {
    name: 'componentConfig',
    title: 'Component Config',
    icon: '',
    disabledActions: ['create', 'delete'],
    fields: [
        {
            name: 'subscribe',
            title: 'Subscribe Component',
            type: 'subscribe',
        },
        {
            name: 'notFound',
            title: 'Not Found Component (404)',
            type: 'notFound',
        },
    ],
};
