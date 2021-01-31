import { FluidObject, FixedObject } from 'gatsby-image';
import { IFluidObject as BackgroundFluidObject } from 'gatsby-background-image';

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
            // Just in case we want to set a background image color on a container
            palette?: {
                muted?: {
                    background: string;
                };
                darkMuted?: {
                    background: string;
                };
                darkVibrant?: {
                    background: string;
                };
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
            // Just in case we want to set a background image color on a container
            palette?: {
                muted?: {
                    background: string;
                };
                darkMuted?: {
                    background: string;
                };
                darkVibrant?: {
                    background: string;
                };
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
