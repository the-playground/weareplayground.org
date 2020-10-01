import { useStaticQuery, graphql } from 'gatsby';
import {
    PrismicImage,
    PrismicFluidImage,
    PrismicExternalLink,
} from '@type/prismic';

export const useQuerySiteConfig = (): SiteConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { prismicSiteConfig } = useStaticQuery(graphql`
        query GlobalMetaQuery {
            prismicSiteConfig {
                data {
                    name
                    contact_email
                    ticket_email
                    audition_email
                    website {
                        url
                    }
                    legal_name
                    ein
                    founding_date
                    location_city
                    location_state
                    location_state_code
                    location_zip
                    logo {
                        url
                        alt
                        dimensions {
                            width
                            height
                        }
                    }
                    facebook {
                        url
                    }
                    github {
                        url
                    }
                    instagram {
                        url
                    }
                    spotify {
                        url
                    }
                    youtube {
                        url
                    }
                    facebook_app_id
                    verification_google
                    verification_bing
                    verification_norton
                    meta_title_template
                    fallback_page_meta_image {
                        url
                        alt
                        dimensions {
                            width
                            height
                        }
                    }
                    fallback_post_meta_image {
                        url
                        alt
                        dimensions {
                            width
                            height
                        }
                    }
                    fallback_season_meta_image {
                        url
                        alt
                        dimensions {
                            width
                            height
                        }
                    }
                    fallback_show_meta_image {
                        url
                        alt
                        dimensions {
                            width
                            height
                        }
                    }

                    # Subscribe
                    subscribe_title
                    subscribe_copy
                    subscribe_image {
                        fluid(imgixParams: { sat: -100 }) {
                            ...GatsbyPrismicImageFluid
                        }
                    }
                }
            }
        }
    `);

    return prismicSiteConfig?.data;
};

export interface SiteConfig {
    audition_email: string;
    contact_email: string;
    ein: string;
    facebook: PrismicExternalLink;
    facebook_app_id: string;
    fallback_page_meta_image: PrismicImage;
    fallback_post_meta_image: PrismicImage;
    fallback_season_meta_image: PrismicImage;
    fallback_show_meta_image: PrismicImage;
    founding_date: string;
    github: PrismicExternalLink;
    instagram: PrismicExternalLink;
    legal_name: string;
    location_city: string;
    location_state: string;
    location_state_code: string;
    location_zip: string;
    logo: PrismicImage;
    meta_title_template: string;
    name: string;
    spotify: PrismicExternalLink;
    ticket_email: string;
    verification_google: string;
    verification_bing: string;
    verification_norton: string;
    website: PrismicExternalLink;
    youtube: PrismicExternalLink;

    // Subscribe
    subscribe_title: string;
    subscribe_copy: string;
    subscribe_image: PrismicFluidImage;
}
