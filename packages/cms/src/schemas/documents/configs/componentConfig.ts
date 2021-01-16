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
    ],
};
