import { useStaticQuery, graphql } from 'gatsby';

export const useLinkMapConfig = (): LinkMapConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanityLinkMapConfig } = useStaticQuery(graphql`
        query LinkMapConfigQuery {
            sanityLinkMapConfig(_id: { eq: "linkMapConfig" }) {
                blogPage {
                    slug {
                        current
                    }
                }
                showArchivePage {
                    slug {
                        current
                    }
                }
                sitemap
            }
        }
    `);
    return sanityLinkMapConfig;
};

export interface LinkMapConfig {
    blogPage: {
        slug: {
            current: string;
        };
    };
    archivePage: {
        slug: {
            current: string;
        };
    };
    sitemap: string;
}
