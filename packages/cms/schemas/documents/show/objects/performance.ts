import { format } from 'date-fns';

export const performanceConfig = {
    name: 'performanceConfig',
    title: 'Performance Config',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
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
            name: 'runtimeHours',
            title: 'Runtime Hours',
            description:
                'How many hours does the show run for (whole numbers only)',
            type: 'number',
            validation: (Rule: any) => Rule.integer().positive().lessThan(4),
        },
        {
            name: 'runtimeMinutes',
            title: 'Runtime Minutes',
            description:
                'How many minutes does the show run for (whole numbers only)',
            type: 'number',
            validation: (Rule: any) => Rule.integer().positive().lessThan(60),
        },
        {
            name: 'intermissionCount',
            title: 'Number of Intermissions',
            description: 'How many intermissions does this show have?',
            type: 'number',
            validation: (Rule: any) => Rule.integer().positive().lessThan(3),
        },
        {
            name: 'rating',
            title: 'Rating',
            description: 'The age rating/appropriateness of this show.',
            type: 'string',
            options: {
                layout: 'radio',
                direction: 'horizontal',
                list: [
                    { title: 'R', value: 'r' },
                    { title: 'PG-13', value: 'pg13' },
                    { title: 'PG', value: 'pg' },
                ],
            },
        },

        {
            name: 'contentAdvisory',
            title: 'Content Advisory',
            type: 'text',
            rows: 4,
        },
        {
            name: 'effectAdvisory',
            title: 'Effects Advisory',
            type: 'text',
            rows: 4,
        },
    ],
};

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
        },
        prepare(selection: any) {
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
