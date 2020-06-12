import { useStaticQuery, graphql } from 'gatsby';
import { getShowSlug, formatSlug } from '@lib/url';

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
                    season_archive_page {
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

    return {
        about: formatSlug(links.about_page?.uid),
        audition: formatSlug(links.audition_page?.uid),
        contact: formatSlug(links.contact_page?.uid),
        supportUs: formatSlug(links.support_us_page?.uid),
        legal: formatSlug(links.legal_page?.uid),
        seasonArchive: formatSlug(links.season_archive_page?.uid),
        currentSeason:
            formatSlug(links.current_season_page?.uid) ??
            formatSlug(
                links.season_archive_page?.uid
            ) /* Make sure we have a fallback here */,
        currentShow:
            getShowSlug(
                links.current_show_page?.uid,
                links.current_show_page?.document?.data?.season?.uid
            ) ??
            formatSlug(
                links.season_archive_page?.uid
            ) /* Make sure we have a fallback here */,
    };
};

export interface LinkMap {
    about: string;
    audition: string;
    contact: string;
    supportUs: string;
    legal: string;
    seasonArchive: string;
    currentSeason: string;
    currentShow: string;
}
