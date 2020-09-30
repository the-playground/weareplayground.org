import { GatsbyImageProps } from 'gatsby-image';
import { PrismicExternalLink } from './prismic';

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
