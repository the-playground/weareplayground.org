export const contentAdvisory = {
    title: 'Content Advisory',
    name: 'contentAdvisory',
    type: 'object',
    fields: [
        {
            title: 'Copy',
            name: 'copy',
            type: 'text',
            rows: 2,
        },
        {
            title: 'Has Modal',
            name: 'hasModal',
            description: 'This item has a modal with additional information',
            type: 'boolean',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Modal Trigger Text',
            name: 'modalTriggerText',
            description: 'The text that a user will click to trigger the modal',
            type: 'string',
        },
        {
            title: 'Modal Content',
            name: 'modalContent',
            type: 'contentBlock',
        },
    ],
};

export const effectsAdvisory = {
    title: 'Effects Advisory',
    name: 'effectsAdvisory',
    type: 'object',
    fields: [
        {
            title: 'Copy',
            name: 'copy',
            type: 'text',
            rows: 2,
        },
        {
            title: 'Has Modal',
            name: 'hasModal',
            description: 'This item has a modal with additional information',
            type: 'boolean',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Modal Trigger Text',
            name: 'modalTriggerText',
            description: 'The text that a user will click to trigger the modal',
            type: 'string',
        },
        {
            title: 'Modal Content',
            name: 'modalContent',
            type: 'contentBlock',
        },
    ],
};
