export default [
    {
        name: 'openDate',
        title: 'Opening Date',
        description: 'The date of the first performance',
        type: 'datetime',
        readOnly: true,
        options: {
            dateFormat: 'ddd » YYYY-MM-DD',
            timeFormat: 'h:mm:a',
            timeStep: 30,
        },
    },
    {
        name: 'closeDate',
        title: 'Closing Date',
        description: 'The date of the last performance',
        type: 'datetime',
        readOnly: true,
        options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'h:mm:a',
            timeStep: 30,
        },
    },
];
