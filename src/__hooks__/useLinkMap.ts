import { useStaticQuery, graphql } from 'gatsby';
import {
    getChildPageSlug,
    getShowSlug,
    getSeasonSlug,
    normalizeSlug,
} from '@lib/url';

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
                    blog_page {
                        uid
                    }
                    legal_page {
                        uid
                    }
                    privacy_policy_page {
                        uid
                    }
                    show_archive_page {
                        uid
                    }
                    support_us_page {
                        uid
                    }
                    terms_page {
                        uid
                    }

                    sitemap {
                        url
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
    const archive = normalizeSlug(links.show_archive_page?.uid);
    const legal = normalizeSlug(links.legal_page?.uid);

    return {
        archive,
        about: normalizeSlug(links.about_page?.uid),
        audition: normalizeSlug(links.audition_page?.uid),
        blog: normalizeSlug(links.blog_page?.uid),
        contact: normalizeSlug(links.contact_page?.uid),
        legal,
        privacyPolicy: getChildPageSlug(legal, links.privacy_policy_page?.uid),
        sitemap: links.sitemap?.url,
        supportUs: normalizeSlug(links.support_us_page?.uid),
        terms: getChildPageSlug(legal, links.terms_page?.uid),
        currentSeason: getSeasonSlug(links.current_season_page?.uid),
        currentShow: getShowSlug(
            links.current_show_page?.uid,
            links.current_show_page?.document?.data?.season?.uid
        ),
    };
};

export interface LinkMap {
    about: string;
    archive: string;
    audition: string;
    blog: string;
    contact: string;
    legal: string;
    privacyPolicy: string | undefined;
    supportUs: string;
    sitemap: string;
    terms: string | undefined;
    currentSeason: string | undefined;
    currentShow: string | undefined;
}
