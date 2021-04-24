import { getImage, GatsbyImageProps } from 'gatsby-plugin-image';

import { GatsbyImageDataArgs as SanityGatsbyImageDataArgs } from 'gatsby-source-sanity';

import { SanityImageAsset } from '@nerve/shared/types';

/**
 * This isn't the most ideal solution, but since Gatsby doesn't export types for its
 * file nodes, we need to get the type ourselves by grabbing params off of the
 * `getImage` function. Once we have the params (as a tuple), we can grab the first one
 * which is the FileNode reference.
 *
 * * NOTE: This is fragile and will break of the order of params changes. The ideal scenario
 * * would be to open a PR to export the types from `gatsby-image-plugin`
 */
type GatsbyGetImageParams = Parameters<typeof getImage>;
type GatsbyFileNode = GatsbyGetImageParams[0];

type ImageAsset = SanityImageAsset & {
    gatsbyImageData: GatsbyFileNode;
};

export interface ImageProps extends Omit<GatsbyImageProps, 'image'> {
    image: ImageAsset;
    sanityConfig?: SanityGatsbyImageDataArgs;
}
