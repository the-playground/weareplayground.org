export const artists = {
    name: 'showArtists',
    title: 'Artists',
    description: '',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'directors',
            title: 'Director(s)',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'artist' } }],
        },
        {
            name: 'actors',
            title: 'Actors',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'artist' } }],
        },
        {
            name: 'designers',
            title: 'Designers',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'artist' } }],
        },
        {
            name: 'crewMembers',
            title: 'Crew Members',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'artist' } }],
        },
        {
            name: 'shadows',
            title: 'Show Shadows',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'artist' } }],
        },
    ],
};
