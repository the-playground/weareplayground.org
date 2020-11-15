export const importantDates = [
    {
        name: 'openDate',
        title: 'Opening Date',
        description: 'The date of the first performance',
        type: 'datetime',
        readOnly: true,
        fieldset: 'dates',
        options: {
            dateFormat: 'ddd » YYYY-MM-DD',
            timeFormat: 'h:mm:a',
            timeStep: 30,
        },
    },
    {
        name: 'closingDate',
        title: 'Closing Date',
        description: 'The date of the last performance',
        type: 'datetime',
        readOnly: true,
        fieldset: 'dates',
        options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'h:mm:a',
            timeStep: 30,
        },
    },
];
