export const ticket = {
    name: 'ticket',
    title: 'Ticket',
    type: 'object',
    fields: [
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                layout: 'radio',
                direction: 'horizontal',
                list: [
                    { value: 'standard', title: 'Standard Ticketing' },
                    { value: 'door', title: 'Door Only' },
                ],
            },
        },
        {
            name: 'externalLink',
            title: 'External Link',
            description:
                'If tickets for this performance are being sold externally, provide a link',
            type: 'url',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule: any) => Rule.positive(),
        },
    ],
};
