export const useSiteConfig = (): ISiteConfig => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanitySiteConfig } = useStaticQuery(graphql`
        query SiteConfigQuery {
            sanitySiteConfig(_id: { eq: "siteConfig" }) {
                verificationGoogle
                verificationBing
            }
        }
    `);

    return sanitySiteConfig;
};

export interface ISiteConfig {
    verificationGoogle: string;
    verificationBing: string;
}
