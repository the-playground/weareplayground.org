import { FluidObject, FixedObject } from 'gatsby-image';
import { IFluidObject as BackgroundFluidObject } from 'gatsby-background-image';

import { getGatsbyImageData as getSanityGatsbyImageData, GatsbyImageDataArgs as SanityGatsbyImageDataArgs } from 'gatsby-source-sanity'

declare module '@sanity/block-content-to-react';

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

/**
 * The shape of a standard Sanity Document (page or collection)
 */
export interface SanityDocument {
    _updatedAt: string;
    title: string;
    slug: {
        current: string;
    };
    seo: SanityDocumentSEO;
}

/**
 * Any document that should be visible to Google should have an SEO object
 * with this shape.
 */
export interface SanityDocumentSEO {
    title: string;
    description: string;
    hide: boolean;
    image: SanityImage;
    publishedAt: string;
}

/**
 * A standard (not fluid or fixed) image coming in from a Sanity query.
 */
export interface SanityImage {
    alt?: string;
    asset: {
        _id?: string;
        url: string;
        metadata: {
            dimensions: {
                width: number;
                height: number;
            };
        };
    };
}

/**
 * A "Fluid" image coming in from a Sanity query
 */
export interface SanityFluidImage {
    alt?: string;
    asset: {
        _id?: string;
        fluid: FluidObject;
        metadata?: {
            dimensions?: {
                width: number;
                height: number;
            };
        };
    };
    // These only exist when querying an object type of "imageWithFullMeta" in Sanity
    caption?: string;
    credit?: string;
}

/**
 * A "Fixed" image coming in from a Sanity query
 */
export type SanityFixedImage = {
    alt?: string;
    asset: {
        _id?: string;
        fixed: FixedObject;
        metadata: {
            dimensions: {
                width: number;
                height: number;
            };
        };
    };
    // These only exist when querying an object type of "imageWithFullMeta" in Sanity
    caption?: string;
    credit?: string;
};

/**
 * A "Fluid" image coming in from a Sanity query that should be used as a background image.
 * * Note that the main difference between this and "SanityFluidImage" is that we are not querying any metadata.
 */
export interface SanityBackgroundImage {
    asset: {
        fluid: BackgroundFluidObject;
    };
}

/**
 * A link that contains a reference to an internal document.
 */
export type SanityInternalLink = {
    slug: {
        current: string;
    };
};
