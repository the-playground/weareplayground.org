import { FluidImageProps, LocalFileImageProps } from '@components/foundations';
import { PrismicExternalLink, PrismicImage } from './prismic';

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
    seo_title: string;
    seo_description: string;
    seo_image: PrismicImage;
    seo_hide: boolean;
    legacy_url: PrismicExternalLink;
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
