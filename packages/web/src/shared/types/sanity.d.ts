import { FluidObject, FixedObject } from 'gatsby-image';
import { IFluidObject as BackgroundFluidObject } from 'gatsby-background-image';

declare module '@sanity/block-content-to-react';

export interface SanityDocument {
    _updatedAt: string;
    title: string;
    slug: {
        current: string;
    };
    seo: SanityDocumentSEO;
}

export interface SanityDocumentSEO {
    title: string;
    description: string;
    hide: boolean;
    image: SanityImage;
    publishedAt: string;
}

/**
 *
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
 *
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
 *
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
 *
 */
export interface SanityBackgroundImage {
    asset: {
        fluid: BackgroundFluidObject;
    };
}

/**
 *
 */
export type SanityInternalLink = {
    slug: {
        current: string;
    };
};
