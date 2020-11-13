import { format } from 'date-fns';

export const performance = {
    name: 'performance',
    title: 'Performance',
    type: 'object',
    preview: {
        select: {
            title: 'datetime',
        },
        prepare(selection) {
            const { title } = selection;
            return {
                title: format(new Date(title), 'cccc » MMM dd, yyyy @ h:mm a'),
            };
        },
    },
    fields: [
        {
            name: 'datetime',
            title: 'Show date & time',
            type: 'datetime',
            description: 'The starting date and time of the show.',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'h:mm:a',
                timeStep: 30,
            },
        },
    ],
};
