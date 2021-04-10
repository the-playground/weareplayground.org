import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
} from '@nerve/shared/types';
import { SeasonReference } from '@nerve/domains/season';

/**
 * Types for a single Show landing page
 */
export interface ShowPage extends SanityDocument {
    author: ShowAuthor;
    heroImage: SanityImageData;
    thumbnailImage: SanityImageData;
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
}

export interface ShowCoreWithPoster extends ShowCore {
    posterImage: SanityImageData;
}

export interface ShowCoreWithCard extends ShowCore {
    cardImage: SanityImageData;
}

export interface ShowCoreWithThumbnail {
    thumbnailImage: SanityImageData;
}

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

/**
 * Types for show filter & sort functions anywhere an instance of a show needs
 * to be filtered or sorted by date. This can be any shape as long as it extends
 * ShowCore. We don't want to be too prescriptive here.
 */

export interface ComparableShow extends ShowCore {
    [key: string]: any;
}
