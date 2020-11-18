import * as showSchemaFragment from './__fragments__/show';
import * as seoSchemaFragment from './__fragments__/seo';

export const showSchema = {
    name: 'show',
    title: 'Shows',
    type: 'document',
    icon: (): string => '🎭',
    fieldsets: [
        {
            name: 'basic',
            title: 'Basic Info',
            description: '',
            options: { collapsible: true, collapsed: true },
        },
        {
            name: 'dates',
            title: 'Opening & Closing Dates',
            description:
                '(auto-generated based on configured performance occurrences)',
            options: { collapsible: true, collapsed: true },
        },
    ],
    fields: [
        {
            name: 'title',
            title: 'Show Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Show Slug',
            type: 'slug',
            options: {
                source: 'title',
                slugify: (input: string): string =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'type',
            title: 'Show Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Live', value: 'live' },
                    { title: 'Virtual', value: 'virtual' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'isCollaboration',
            title: 'This show is a collaboration',
            description:
                'Turn "on" if this show is a collaborative effort with another company',
            type: 'boolean',
            validation: (Rule: any) => Rule.required(),
        },
        showSchemaFragment.authorInfo,
        ...showSchemaFragment.basicInfo,
        showSchemaFragment.collaboration,
        ...showSchemaFragment.importantDates,
        showSchemaFragment.performance,
        showSchemaFragment.images,
        seoSchemaFragment.basicSEO,
        showSchemaFragment.legacyOptions,
    ],
};
