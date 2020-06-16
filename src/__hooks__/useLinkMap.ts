import { useStaticQuery, graphql } from 'gatsby';
import { getShowSlug, getSeasonSlug, formatSlug } from '@lib/url';

export const useLinkMap = (): LinkMap => {
    // Get all of our predefined site links from Prismic
    const { prismicSiteConfig } = useStaticQuery(graphql`
        query SiteLinksQuery {
            prismicSiteConfig {
                data {
                    about_page {
                        uid
                    }
                    audition_page {
                        uid
                    }
                    contact_page {
                        uid
                    }
                    legal_page {
                        uid
                    }
                    show_archive_page {
                        uid
                    }
                    support_us_page {
                        uid
                    }

                    current_season_page {
                        uid
                    }
                    current_show_page {
                        uid
                        document {
                            ... on PrismicShow {
                                data {
                                    season {
                                        uid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const links = prismicSiteConfig.data;
    const archivePage = formatSlug(links.show_archive_page?.uid);

    return {
        about: formatSlug(links.about_page?.uid),
        audition: formatSlug(links.audition_page?.uid),
        contact: formatSlug(links.contact_page?.uid),
        supportUs: formatSlug(links.support_us_page?.uid),
        legal: formatSlug(links.legal_page?.uid),
        archive: archivePage,
        currentSeason: getSeasonSlug(links.current_season_page?.uid),
        currentShow: getShowSlug(
            links.current_show_page?.uid,
            links.current_show_page?.document?.data?.season?.uid
        ),
    };
};

export interface LinkMap {
    about: string;
    audition: string;
    contact: string;
    supportUs: string;
    legal: string;
    archive: string;
    currentSeason: string | undefined;
    currentShow: string | undefined;
}
