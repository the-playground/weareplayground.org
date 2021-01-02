import {
    FluidImageProps,
    LocalFileImageProps,
    FixedImageProps,
} from '@nerve/core/components';
import { SanityFluidImage, SanityDocument } from '@nerve/shared/types';
import { SeasonReference } from '@nerve/domains/season';

/**
 *
 */
export interface ShowPage extends SanityDocument {
    author: ShowAuthor;
    heroImage: SanityFluidImage;
    thumbnailImage: FixedImageProps;
    performances: ShowPerformance[];
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
    posterImage: FluidImageProps;
}

export interface ShowCoreWithCard extends ShowCore {
    cardImage: FluidImageProps;
}

export interface ShowCoreWithThumbnail {
    thumbnailImage: FixedImageProps;
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
