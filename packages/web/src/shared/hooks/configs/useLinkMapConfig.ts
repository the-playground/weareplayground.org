import { useStaticQuery, graphql } from 'gatsby';

export const useLinkMapConfig = (): LinkMapConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanityLinkMapConfig } = useStaticQuery(graphql`
        query LinkMapConfigQuery {
            sanityLinkMapConfig {
                currentShow
            }
        }
    `);

    return sanityLinkMapConfig;
};

export interface LinkMapConfig {
    currentShow: string;
}
