import React from 'react';
import { Smile } from 'react-feather';

import { DocumentCollection } from '../../../types';

export const schema: DocumentCollection = {
    name: 'artist',
    title: 'Artists',
    icon: <Smile />,
    disableSEO: true,
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'lastName',
            title: 'Last name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'headshot',
            title: 'Headshot',
            type: 'imageWithFullMeta',
        },
    ],
    preview: {
        select: {
            firstName: 'firstName',
            lastName: 'lastName',
            media: 'headshot',
        },
        prepare({ firstName, lastName, media }: any) {
            return {
                title: `${firstName} ${lastName}`,
                subtitle: 'something interesting here',
                media,
            };
        },
    },
};
