import { ConfigDocument } from '../../../types';

export const schema: ConfigDocument = {
    name: 'seoConfig',
    title: 'SEO Config',
    icon: '',
    disabledActions: ['create', 'delete'],
    fields: [
        {
            name: 'fallbackPageMetaImage',
            title: 'Fallback Meta Image » Page',
            type: 'imageWithAlt',
        },
        {
            name: 'fallbackSeasonMetaImage',
            title: 'Fallback Meta Image » Season',
            type: 'imageWithAlt',
        },
        {
            name: 'fallbackShowMetaImage',
            title: 'Fallback Meta Image » Show',
            type: 'imageWithAlt',
        },
        {
            name: 'fallbackPostMetaImage',
            title: 'Fallback Meta Image » Post',
            type: 'imageWithAlt',
        },
    ],
};
