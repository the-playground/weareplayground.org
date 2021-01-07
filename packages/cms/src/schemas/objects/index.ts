import { address } from './address';

import { imageWithAlt, imageWithFullMeta } from './images';
import {
    internalPostLink,
    internalSeasonLink,
    internalShowLink,
    internalLink,
    externalLink,
} from './links';
import { pageSEO } from './seo';
import { contentBlock } from './blocks';

export default [
    address,
    imageWithAlt,
    imageWithFullMeta,
    internalPostLink,
    internalSeasonLink,
    internalShowLink,
    internalLink,
    externalLink,
    pageSEO,
    contentBlock,
];
