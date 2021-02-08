export const toggles = {
    title: 'Show Toggles',
    name: 'showToggles',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: 'Toggle » hide from the website',
            name: 'isHiddenFromWebsite',
            description:
                'Toggling this on will prevent this show from being displayed on the frontend of the website.',
            type: 'boolean',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'Toggle » is a Collaboration',
            name: 'isCollaboration',
            description:
                'Toggle on if this show is a collaborative effort with another company',
            type: 'boolean',
            validation: (Rule: any) => Rule.required(),
        },
    ],
};
