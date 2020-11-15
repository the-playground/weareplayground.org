import { format } from 'date-fns';

/**
 *
 */
const performancesConfig = {
    name: 'config',
    title: 'Configuration',
    description: 'Configurations that apply to all performances for this show',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
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
            name: 'advisories',
            title: 'Effect & Content Advisories',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true,
            },
            fields: [
                {
                    name: 'content',
                    title: 'Content Advisory',
                    type: 'array',
                    of: [{ type: 'block', styles: [] }],
                },
                {
                    name: 'effects',
                    title: 'Effects Advisory',
                    type: 'array',
                    styles: [],
                    of: [{ type: 'block', styles: [] }],
                },
            ],
        },
    ],
};

/**
 *
 */
const singlePerformance = {
    name: 'occurrence',
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
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'h:mm:a',
                timeStep: 30,
            },
        },
        {
            name: 'ticketDefaultPrice',
            title: 'Default Ticket Price',
            type: 'number',
            validation: (Rule: any) => Rule.positive(),
        },
        {
            name: 'ticketInitialQuantity',
            title: 'Initial Number of Tickets Available',
            type: 'number',
            validation: (Rule: any) => Rule.positive(),
        },
    ],
};

const performanceOccurrences = {
    name: 'occurrences',
    title: 'Occurrences',
    description: 'Set up and configure performance occurrences',
    type: 'array',
    validation: (Rule: any) => Rule.unique(),
    of: [singlePerformance],
};

/**
 *
 */
export const performance = {
    name: 'performance',
    title: 'Performance Setup',
    description:
        'Set up performance options for this show (including performance dates)',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [performancesConfig, performanceOccurrences],
};
