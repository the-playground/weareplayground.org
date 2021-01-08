import { useStaticQuery, graphql } from 'gatsby';
import {} from '@nerve/shared/types';

export const useSiteConfig = (): SiteConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanitySiteConfig } = useStaticQuery(graphql`
        query SiteConfigQuery {
            sanitySiteConfig {
                verificationGoogle
                verificationBing
                verificationNorton
            }
        }
    `);

    return sanitySiteConfig;
};

export interface SiteConfig {
    verificationGoogle: string;
    verificationBing: string;
    verificationNorton: string;
}
