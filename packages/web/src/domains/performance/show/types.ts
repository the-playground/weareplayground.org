import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
    SanityImageDataWithAlt,
} from '@web/shared/types';
import { SeasonReference } from '@web/domains/performance/season';

/**
 * Types for a single Show landing page
 */
export interface ShowPage extends SanityDocument {
    author: ShowAuthor;
    heroImage: SanityImageData;
    thumbnailImage: SanityImageDataWithAlt;
    performances: ShowPerformance[];
    season: SeasonReference;
    openDate: string;
    closeDate: string;
}

export interface ShowPageContext extends GatsbyPageContext {
    seasonID: string;
    seasonSlug: string;
    seasonURL: string;
}

/**
 * The "required" data for displaying instances of shows anywhere across our site
 * other than a Single Show page.
 */
export interface ShowCore {
    title: string;
    slug: {
        current: string;
    };
    season: SeasonReference;
    author: ShowAuthor;
    openDate: string;
    closeDate: string;
    // In some instances, we will want the full path to the show to be available
    path?: string;
}

export interface ShowPosterImage {
    posterImage: SanityImageDataWithAlt;
}
export interface ShowCardImage {
    cardImage: SanityImageDataWithAlt;
}

export interface ShowThumbnailImage {
    thumbnailImage: SanityImageDataWithAlt;
}

export type ShowCoreWithPoster = ShowCore & ShowPosterImage;
export type ShowCoreWithCard = ShowCore & ShowCardImage;
export type ShowCoreWithThumbnail = ShowCore & ShowThumbnailImage;
export type ShowCoreWithImages = ShowCore &
    ShowCardImage &
    ShowPosterImage &
    ShowThumbnailImage;

/**
 * Metadata associated with a show.
 */
export interface ShowAuthor {
    name: string;
    bioLink?: string;
    scriptLink?: string;
}

export interface ShowPerformance {
    datetime: string;
    status: 'active' | 'cancelled';
    isPreview: boolean;
    isPayWhatYouCan: boolean;
    hasTalkback: boolean;
}
