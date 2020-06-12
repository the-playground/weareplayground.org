import { useStaticQuery, graphql } from 'gatsby';
import { PrismicImage, PrismicLink } from '@type/prismic';

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
                    spotify {
                        url
                    }
                    facebook {
                        url
                    }
                    instagram {
                        url
                    }
                    facebook_app_id
                    verification_google
                    verification_bing
                    verification_norton
                    fallback_page_meta_image {
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
    facebook: PrismicLink;
    facebook_app_id: string;
    fallback_page_meta_image: PrismicImage;
    fallback_season_meta_image: PrismicImage;
    fallback_show_meta_image: PrismicImage;
    founding_date: string;
    instagram: PrismicLink;
    legal_name: string;
    location_city: string;
    location_state: string;
    location_state_code: string;
    location_zip: string;
    logo: PrismicImage;
    name: string;
    spotify: PrismicLink;
    ticket_email: string;
    verification_google: string;
    verification_bing: string;
    verification_norton: string;
    website: PrismicLink;
}
