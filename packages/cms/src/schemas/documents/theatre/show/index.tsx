import React from 'react';
import { Star } from 'react-feather';

import { DocumentCollection } from '../../../../types';
import { bindFieldsToFieldset } from '../../../../lib/fieldset';

import articles from './fields/articles';
import artists from './fields/artists';
import author from './fields/author';
import basicInfo from './fields/basicInfo';
import collaboration from './fields/collaboration';
import directors from './fields/directors';
import images from './fields/images';
import location from './fields/location';
import openCloseDates from './fields/openCloseDates';
import { performances, performanceConfig } from './fields/performance';
import promo from './fields/promo';
import season from './fields/season';
import sponsors from './fields/sponsors';

import * as showObjects from './objects';

export const schema: DocumentCollection = {
    name: 'show',
    title: 'Shows',
    icon: <Star />,
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
        author,
        directors,
        location,
        ...bindFieldsToFieldset('basic', basicInfo),
        collaboration,
        ...bindFieldsToFieldset('images', images),
        ...openCloseDates,
        performanceConfig,
        performances,
    ],
    initialValue: {
        type: 'live',
        collaoration: {
            is: false,
        },
        seo: {
            hideDocument: false,
            publishedAt: new Date().toISOString(),
        },
    },
    preview: {
        select: {
            title: 'title',
            seasonTitle: 'season.title',
            media: 'posterImage',
        },
        prepare({ title, seasonTitle, media }: any) {
            return {
                title,
                subtitle: seasonTitle,
                media,
            };
        },
    },
    orderings: [
        {
            title: 'Show Date, Newest to Oldest',
            name: 'showDateDesc',
            by: [{ field: 'closeDate', direction: 'desc' }],
        },
    ],
};

export const objects = [
    showObjects.collaboration,
    showObjects.performance,
    showObjects.performanceConfig,
    showObjects.ticket,
    showObjects.scriptAuthor,
];
