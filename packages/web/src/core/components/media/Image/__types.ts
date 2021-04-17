import {
    getImage,
    GatsbyImageProps,
    IGetImageDataArgs,
} from 'gatsby-plugin-image';

import {
    getGatsbyImageData as getSanityGatsbyImageData,
    GatsbyImageDataArgs as SanityGatsbyImageDataArgs,
} from 'gatsby-source-sanity';

import { SanityImageAsset } from '@nerve/shared/types';

type GatsbyGetImageParams = Parameters<typeof getImage>;
type GatsbyFileNode = GatsbyGetImageParams[0];

type ImageAsset = SanityImageAsset & {
    gatsbyImageData: GatsbyFileNode;
};

export interface ImageProps extends Omit<GatsbyImageProps, 'image'> {
    image: ImageAsset;
    sanityConfig?: SanityGatsbyImageDataArgs;
}
