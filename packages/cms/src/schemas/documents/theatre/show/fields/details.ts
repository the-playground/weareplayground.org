export default [
    {
        name: 'openDate',
        title: 'Opening Date',
        description: 'The date of the first performance',
        type: 'datetime',
        readOnly: true,
        options: {
            dateFormat: 'ddd » MMM Do, yyyy',
            timeFormat: 'h:mm:a',
        },
    },
    {
        name: 'closeDate',
        title: 'Closing Date',
        description: 'The date of the last performance',
        type: 'datetime',
        readOnly: true,
        options: {
            dateFormat: 'ddd » MMM Do, yyyy',
            timeFormat: 'h:mm:a',
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
        name: 'location',
        title: 'Location',
        description: 'Where will the show take place?',
        type: 'reference',
        to: [{ type: 'location' }],
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
        name: 'details',
        title: 'Show Detail Items',
        description: '',
        type: 'array',
        options: {
            collapsible: true,
            collapsed: true,
        },
        of: [{ type: 'detailItem' }],
    },
];
