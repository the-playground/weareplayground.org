import { useStaticQuery, graphql } from 'gatsby';

export const useSiteLinks = (): SiteLinks => {
    const config = useStaticQuery(graphql`
        query {
            prismic {
                site_config(lang: "en-us", uid: "site-config") {
                    about_page
                    audition_page
                    contact_page
                    donate_page
                    legal_page
                    season_catalog_page
                }
            }
        }
    `);

    // Link to current show
    // Link to next show

    const configLinks = config.prismic.site_config;

    const linkMap = {
        about: configLinks.about_page,
        audition: configLinks.audition_page,
        contact: configLinks.contact_page,
        donate: configLinks.donate_page,
        legal: configLinks.legal_page,
        seasonCatalog: () => configLinks.season_catalog_page,
        show: (slug) => '',
        season: (slug) => '',
    };

    return { ...linkMap };
};

export interface SiteLinks {
    about: string;
    audition: string;
    contact: string;
    donate: string;
    legal: string;
    seasonCatalog: () => string;
    show: (slug: string) => string;
    season: (slug: string) => string;
}
