import { GatsbyImageProps } from 'gatsby-plugin-image';

import { GatsbyImageDataArgs as SanityGatsbyImageDataArgs } from 'gatsby-source-sanity';

import { SanityImageAsset } from '@web/shared/types';

export interface ImageProps extends Omit<GatsbyImageProps, 'image'> {
    image: SanityImageAsset;
    sanityConfig?: SanityGatsbyImageDataArgs;
}
