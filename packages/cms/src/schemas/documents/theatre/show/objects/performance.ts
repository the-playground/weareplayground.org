import { format } from 'date-fns';

/**
 *
 */
export const performance = {
    name: 'performance',
    title: 'Performance Occurrence',
    type: 'object',
    preview: {
        select: {
            title: 'datetime',
            status: 'status',
        },
        prepare(selection: any) {
            const { title, status } = selection;
            return {
                title: format(new Date(title), 'cccc » MMM dd, yyyy @ h:mm a'),
                subtitle: status,
            };
        },
    },
    fields: [
        {
            name: 'datetime',
            title: 'Show date & time',
            type: 'datetime',
            description: 'The starting date and time of the show.',
            validation: (Rule: any) => Rule.required(),
            options: {
                dateFormat: 'MM-DD-YYYY',
                timeFormat: 'h:mm:a',
                timeStep: 30,
            },
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                layout: 'radio',
                direction: 'horizontal',
                list: [
                    { value: 'active', title: 'Active' },
                    { value: 'cancelled', title: 'Cancelled' },
                ],
            },
        },
        {
            name: 'isPreview',
            title: 'Preview Performance',
            type: 'boolean',
        },
        {
            name: 'isPayWhatYouCan',
            title: 'Pay What You Can',
            type: 'boolean',
        },
        {
            name: 'hasTalkback',
            title: 'Talkback After Performance',
            type: 'boolean',
        },
    ],
};
