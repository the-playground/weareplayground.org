import { useStaticQuery, graphql } from 'gatsby';

export const useQuerySiteConfig = () => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const config = useStaticQuery(graphql`
        query GlobalMetaQuery {
            prismic {
                companyconfig(lang: "en-us", uid: "company-config") {
                    name
                    contact_email
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
                }
                siteconfig(lang: "en-us", uid: "site-config") {
                    verification_google
                    verification_bing
                    verification_norton
                }
            }
        }
    `);

    const site = config?.prismic?.siteconfig;
    const company = config?.prismic?.companyconfig;

    return { site, company };
};
