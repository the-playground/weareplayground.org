import { FluidObject, FixedObject } from 'gatsby-image';
import { IFluidObject as BackgroundFluidObject } from 'gatsby-background-image';

export interface SanityDocument {
    _createdAt: string;
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
}

/**
 *
 */
export interface SanityImage {
    alt?: string;
    asset: {
        url: string;
        dimensions?: {
            width: string;
            height: string;
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
        dimensions?: {
            width: string;
            height: string;
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
        dimensions: {
            width: string;
            height: string;
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
export type SanitySlug = {
    slug: {
        current: string;
    };
};
