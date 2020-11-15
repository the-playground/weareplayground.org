import { isThisQuarter } from 'date-fns';
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
        },
        ...showSchemaFragment.basicInfo,
        showSchemaFragment.authorInfo,
        showSchemaFragment.images,
        ...showSchemaFragment.importantDates,
        showSchemaFragment.performance,
        seoSchemaFragment.basicSEO,
        showSchemaFragment.legacyOptions,
    ],
};
