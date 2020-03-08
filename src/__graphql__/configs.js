import React from 'react';
import { graphql } from 'gatsby';

export const companyConfigFragment = graphql`
    fragment companyConfigFragment on Query {
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
        }
    }
`;

export const siteConfigFragment = graphql`
    fragment siteConfigFragment on Query {
        prismic {
            siteconfig(lang: "en-us", uid: "site-config") {
                verification_google
                verification_bing
                verification_norton
            }
        }
    }
`;
