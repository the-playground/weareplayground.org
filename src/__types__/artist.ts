import { FluidImageProps, FixedImageProps } from '@components/foundations';
import { PrismicExternalLink } from './prismic';

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
}

export interface Author extends Pick<Artist, 'name' | 'bio' | 'instagram'> {
    headshot?: FixedImageProps;
}

export interface Performer extends Artist {
    headshot?: FluidImageProps;
}
