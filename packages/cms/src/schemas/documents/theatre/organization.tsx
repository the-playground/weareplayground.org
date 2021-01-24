import React from 'react';
import { Briefcase } from 'react-feather';

import { DocumentCollection } from '../../../types';

export const schema: DocumentCollection = {
    name: 'organization',
    title: 'Organizations',
    icon: <Briefcase />,
    disableSEO: true,
    fields: [
        {
            name: 'title',
            title: 'Organization Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Organization Description',
            type: 'text',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
        {
            name: 'website',
            title: 'Website',
            type: 'url',
        },
    ],
};
