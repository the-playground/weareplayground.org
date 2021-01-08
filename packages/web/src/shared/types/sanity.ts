import { FluidObject, FixedObject } from 'gatsby-image';
import { IFluidObject as BackgroundFluidObject } from 'gatsby-background-image';

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
        fluid: FluidObject;
        metadata?: {
            dimensions?: {
                width: number;
                height: number;
            };
        };
    };
}

/**
 *
 */
export type SanityFixedImage = {
    alt?: string;
    asset: {
        fixed: FixedObject;
        metadata: {
            dimensions: {
                width: number;
                height: number;
            };
        };
    };
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
