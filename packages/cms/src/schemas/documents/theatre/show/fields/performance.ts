/**
 *
 */
export const performanceConfig = {
    name: 'performanceConfig',
    title: 'Performance Configuration',
    description: 'Configurations that apply to all performances for this show',
    type: 'performanceConfig',
};

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
