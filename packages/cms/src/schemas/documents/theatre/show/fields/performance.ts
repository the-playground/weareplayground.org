/**
 *
 */
export const performances = {
    name: 'performances',
    title: 'Performances',
    description: 'Set up and configure performance occurrences',
    type: 'array',
    validation: (Rule: any) => Rule.unique(),
    of: [{ type: 'performance' }],
};
