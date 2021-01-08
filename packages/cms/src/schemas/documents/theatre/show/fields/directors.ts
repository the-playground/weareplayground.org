export default {
    name: 'directors',
    title: 'Director(s)',
    type: 'array',
    of: [{ type: 'reference', to: { type: 'artist' } }],
    validation: (Rule: any) => Rule.required(),
};
