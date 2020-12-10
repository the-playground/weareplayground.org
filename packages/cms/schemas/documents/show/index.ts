import { pageSEO } from '../../shared';

import articles from './fragments/articles';
import artists from './fragments/artists';
import author from './fragments/author';
import basicInfo from './fragments/basicInfo';
import collaboration from './fragments/collaboration';
import images from './fragments/images';
import legacy from './fragments/legacy';
import location from './fragments/location';
import openCloseDates from './fragments/openCloseDates';
import { performances, performancesConfig } from './fragments/performance';
import promo from './fragments/promo';
import season from './fragments/season';
import sponsors from './fragments/sponsors';

export default {
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
                layout: 'radio',
                direction: 'horizontal',
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
        season,
        location,
        author,
        ...basicInfo,
        collaboration,
        images,
        pageSEO,
        legacy,
        ...openCloseDates,
        performancesConfig,
        performances,
    ],
    initialValue: {
        type: 'live',
        isCollaboration: false,
        pageSEO: {
            _type: 'object',
            hide: false,
        },
    },
    preview: {
        select: {
            title: 'title',
            season: 'season.title',
        },
        prepare({ title, season }) {
            return {
                title,
                subtitle: season,
            };
        },
    },
};
