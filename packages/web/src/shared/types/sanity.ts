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
    image: SanityImageData;
    publishedAt: string;
}

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

/**
 * Typings for Sanity Image Data
 * ---
 * At the time of writing this (04/10/2020), `gatsby-source-sanity` does not export its Image types for us to use for Sanity query results.
 * Unfortunately, this means we need to re-create all of those types so we have flexibility over how image assets
 * are typed from gql queries to send to our SanityImage component.
 *
 * I am going to open a PR at some point to expose these types from the source plugin itself, but for now,
 * I am going to copy/paste the types below, updating the name to be Sanity-specific.
 *
 * This is obviously really fragile, but if sanity updates their underlying types, it should at least throw a
 * Typescript error so we can update ours.
 */

type SanityImagePalette = {
    darkMuted?: SanityImagePaletteSwatch;
    lightVibrant?: SanityImagePaletteSwatch;
    darkVibrant?: SanityImagePaletteSwatch;
    vibrant?: SanityImagePaletteSwatch;
    dominant?: SanityImagePaletteSwatch;
    lightMuted?: SanityImagePaletteSwatch;
    muted?: SanityImagePaletteSwatch;
};
type SanityImagePaletteSwatch = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
};

type SanityImageDimensions = {
    width: number;
    height: number;
    aspectRatio: number;
};
type SanityImageMetadata = {
    palette?: SanityImagePalette;
    dimensions: SanityImageDimensions;
    lqip?: string;
};
type SanityImageAssetStub = {
    url: string;
    assetId: string;
    extension: string;
    metadata: SanityImageMetadata;
};
type SanityImageAsset = SanityImageAssetStub & {
    _id: string;
};
type SanityImageRef = {
    _ref: string;
};

export type SanityImageObject = {
    asset: SanityImageRef | SanityImageAsset;
};

/**
 * The types of data that the getGatsbyImageData 'image' prop expects
 */
export type SanityImageNode =
    | SanityImageAsset
    | SanityImageObject
    | SanityImageRef
    | string
    | null
    | undefined;

/**
 * The expected data shape for an image being returned from a Sanity image query.
 */
export type SanityImageData = SanityImageObject;

export type SanityImageDataWithAlt = SanityImageData & {
    alt: string;
};

// These only exist when querying an object type of "imageWithFullMeta" in Sanity
export type SanityImageDataWithFullMeta = SanityImageDataWithAlt & {
    caption: string;
    credit: string;
};
