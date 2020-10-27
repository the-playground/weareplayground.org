import { GatsbyImageProps } from 'gatsby-image';
import { FluidImageProps, LocalFileImageProps, } from '@nerve/core/components';
import { PrismicImage, PrismicExternalLink } from '@nerve/shared/types';

export type ArtistRole =
    | 'actor'
    | 'artistic director'
    | 'assistant director'
    | 'board member'
    | 'co-director'
    | 'co-founder'
    | 'lighting designer'
    | 'music supervisor'
    | 'show shadow'
    | 'sound designer'
    | 'stage manager';

export interface Artist {
    uid: string;
    name: string;
    bio?: string;
    roles: ArtistRole[];
    website?: PrismicExternalLink;
    instagram?: PrismicExternalLink;
    email?: string;
    headshot?: FluidImageProps;
}

export interface Performance {
    datetime: string;
    preview: boolean;
    price: number;
    pwyw: boolean;
    status: 'active' | 'inactive';
    talkback: boolean;
}

export interface Show {
    season: {
        uid: string;
        document: {
            data: {
                title: string;
            };
        };
    };
    title: string;
    author: string;
    hero_image: LocalFileImageProps;
    short_description: string;
    long_description: string;
    tagline: string;
    hashtag: string;
    effects_advisory: string;
    content_advisory: string;
    intermissions: number;
    runtime_hours: number;
    runtime_minutes: number;
    author_link: {
        url: string;
    };
    script_link: {
        url: string;
    };
    performances: Performance[];
    artists: [] | undefined;
    location: [] | undefined;
    sponsors: [] | undefined;
    legacy_url: PrismicExternalLink;

    seo_title: string;
    seo_description: string;
    seo_image: PrismicImage;
    seo_hide: boolean;
}

export interface ShowSnippet {
    uid: string;
    data: {
        season: {
            uid: string;
            document: {
                data: {
                    title: string;
                };
            };
        };
        title: string;
        author: string;

        card_image: FluidImageProps;
        poster_image: FluidImageProps;
        performances: Pick<Performance, 'datetime'>[] | undefined;
    };
}

export interface Season {
    node: {
        _meta: {
            uid: string;
        };

        title: string;
        tagline: string;
        description: string;
        catalog_image: GatsbyImageProps;
        catalog_imageSharp: {
            childImageSharp: GatsbyImageProps;
        };
        shows: {
            title: string;
            author: string;
            performances: {
                datetime: Date;
            }[];
        }[];
        legacy_url: PrismicExternalLink;
    };
}