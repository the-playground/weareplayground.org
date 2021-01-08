import React from 'react';
import { Briefcase } from 'react-feather';

export const schema = {
    name: 'organization',
    title: 'Organizations',
    type: 'document',
    icon: () => <Briefcase />,
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
