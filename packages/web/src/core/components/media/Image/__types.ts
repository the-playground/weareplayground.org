import { GatsbyImageProps } from 'gatsby-plugin-image';
import { getGatsbyImageData as getSanityGatsbyImageData, GatsbyImageDataArgs as SanityGatsbyImageDataArgs } from 'gatsby-source-sanity'

/**
 * Unfortunately Sanity doesn't expose its 'ImageNode' type properly, so that makes typing our SanityImage component a little more difficult :/
 * To get around this, we are extracting parameter types from the imported getSanityImage function.
 *
 * The Parameters utility type provided by Typescript returns function parameters in the form of a tuple.
 * We can then reference ImageNode type we are trying to get by it's array index position in the return tuple.
 *
 * * Note: This method is somewhat fragile and could easily break if Sanity changes the name or position of the underlying type param.
 */
export type GetSanityImageParams = Parameters<typeof getSanityGatsbyImageData>
export type SanityImageNode = GetSanityImageParams[0];

export interface SanityImageProps extends Omit<GatsbyImageProps, 'image'> {
    image: SanityImageNode,
    config?: SanityGatsbyImageDataArgs
}