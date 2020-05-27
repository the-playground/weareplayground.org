import { useStaticQuery, graphql } from 'gatsby';
import { PrismicImage, PrismicLink } from '@type/prismic';

export const useQuerySiteConfig = () => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const config = useStaticQuery(graphql`
        query GlobalMetaQuery {
            prismic {
                site_config(lang: "en-us", uid: "site-config") {
                    name
                    contact_email
                    ticket_email
                    audition_email
                    website {
                        ... on PRISMIC__ExternalLink {
                            url
                        }
                    }
                    legal_name
                    ein
                    founding_date
                    location_city
                    location_state_code
                    location_zip
                    spotify {
                        ... on PRISMIC__ExternalLink {
                            url
                        }
                    }
                    facebook {
                        ... on PRISMIC__ExternalLink {
                            url
                        }
                    }
                    instagram {
                        ... on PRISMIC__ExternalLink {
                            url
                        }
                    }
                    facebook_app_id
                    verification_google
                    verification_bing
                    verification_norton
                }
            }
        }
    `);

    return config?.prismic?.site_config;
};

export interface SiteConfig {}
