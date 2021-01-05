import { address } from './address';
import { contentBlock } from './blocks';
import { imageWithAlt, imageWithFullMeta } from './images';
import {
    internalPostLink,
    internalSeasonLink,
    internalShowLink,
    internalLink,
    externalLink,
} from './links';
import { pageSEO } from './seo';

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
