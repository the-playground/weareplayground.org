import { GatsbyImageProps } from 'gatsby-image';
import { FluidImageProps, LocalFileImageProps } from '@nerve/core/components';
import { SanityFluidImage, SanityDocument } from '@nerve/shared/types';

export interface ShowAuthor {
    name: string;
    bioLink?: string;
    scriptLink?: string;
}

export interface Performance {
    datetime: string;
    status: 'active' | 'cancelled';
    isPreview: boolean;
    isPayWhatYouCan: boolean;
    hasTalkback: boolean;

}

export interface ShowCore extends SanityDocument {
    season: SeasonReference
    author: ShowAuthor;
    openDate: string;
    closeDate: string;
}

export interface ShowFull extends SanityDocument {
    heroImage: SanityFluidImage;
    cardImage: FluidImageProps;
    posterImage: FluidImageProps;
    performances: Performance[];
}

export interface SeasonReference {
    slug: {
        current: string;
    }
    title: string;
};


export interface Season extends SanityDocument {
    tagline: string;
    description: string;
}