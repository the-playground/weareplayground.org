import { bindFieldsToFieldset } from '../../../lib/fieldset';

import articles from './fields/articles';
import artists from './fields/artists';
import author from './fields/author';
import basicInfo from './fields/basicInfo';
import collaboration from './fields/collaboration';
import images from './fields/images';
import location from './fields/location';
import openCloseDates from './fields/openCloseDates';
import { performances, performanceConfig } from './fields/performance';
import promo from './fields/promo';
import season from './fields/season';
import seo from './fields/seo';
import sponsors from './fields/sponsors';

import * as showObjects from './objects';

export const schema = {
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
            name: 'images',
            title: 'Images',
            description:
                'Core images for representing this show in various places',
            type: 'object',
            options: { collapsed: true, collapsible: true },
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
        season,
        location,
        author,
        ...bindFieldsToFieldset('basic', basicInfo),
        collaboration,
        ...bindFieldsToFieldset('images', images),
        seo,
        ...openCloseDates,
        performanceConfig,
        performances,
    ],
    initialValue: {
        type: 'live',
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

export const objects = [
    showObjects.collaboration,
    showObjects.performance,
    showObjects.performanceConfig,
    showObjects.ticket,
    showObjects.scriptAuthor,
];
