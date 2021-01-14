import {
    FluidImageProps,
    LocalFileImageProps,
    FixedImageProps,
} from '@nerve/core/components';
import {
    SanityDocument,
    SanityFluidImage,
    SanityFixedImage,
} from '@nerve/shared/types';
import { SeasonReference } from '@nerve/domains/season';

/**
 * Types for a single Show landing page
 */
export interface ShowPage extends SanityDocument {
    author: ShowAuthor;
    heroImage: SanityFluidImage;
    thumbnailImage: SanityFixedImage;
    performances: ShowPerformance[];
    season: SeasonReference;
    openDate: string;
    closeDate: string;
}

export interface ShowPageContext {
    id: string;
    slug: string;
    seasonID: string;
    seasonSlug: string;
    seasonURL: string;
}

/**
 *
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
    posterImage: SanityFluidImage;
}

export interface ShowCoreWithCard extends ShowCore {
    cardImage: SanityFluidImage;
}

export interface ShowCoreWithThumbnail {
    thumbnailImage: SanityFixedImage;
}

/**
 *
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
 * Types for Filter & Sort Functions -- anywhere a show needs
 */

export interface ComparableShow extends ShowCore {
    [key: string]: any;
}
