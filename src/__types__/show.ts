import { ImageProps } from '@components/foundations';
import { PrismicImage } from './prismic';

export interface Performance {
    datetime: Date;
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
    hero_image: ImageProps;
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
    performances: Performance[] | undefined;
    artists: [] | undefined;
    location: [] | undefined;
    sponsors: [] | undefined;
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

        card_image: ImageProps;
        poster_image: ImageProps;
        performances: Pick<Performance, 'datetime'>[] | null;
    };
}
