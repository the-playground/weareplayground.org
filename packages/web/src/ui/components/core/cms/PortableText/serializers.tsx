import React from 'react';

import { DefaultBlock, Figure } from './typesComponents';
import { ExternalLink } from './marksComponents';

export const serializers = {
    types: {
        block: DefaultBlock,
        imageWithFullMeta: Figure,
        imageWithAlt: Figure,
    },
    marks: {
        externalLink: ExternalLink,
    },
};
