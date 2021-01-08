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
];
