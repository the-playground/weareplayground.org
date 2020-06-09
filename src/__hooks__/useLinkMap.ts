import { useStaticQuery, graphql } from 'gatsby';
import { getShowSlug, formatSlug } from '@lib/url';

export const useLinkMap = (): LinkMap => {
    // Get all of our predefined site links from Prismic
    const config = useStaticQuery(graphql`
        query {
            prismic {
                site_config(lang: "en-us", uid: "site-config") {
                    about_page {
                        ... on PRISMIC_About_page {
                            _meta {
                                uid
                            }
                        }
                    }
                    audition_page {
                        ... on PRISMIC_Audition_page {
                            _meta {
                                uid
                            }
                        }
                    }
                    contact_page {
                        ... on PRISMIC_Contact_page {
                            _meta {
                                uid
                            }
                        }
                    }
                    legal_page {
                        ... on PRISMIC_Legal_page {
                            _meta {
                                uid
                            }
                        }
                    }
                    season_archive_page {
                        ... on PRISMIC_Archive_page {
                            _meta {
                                uid
                            }
                        }
                    }
                    support_us_page {
                        ... on PRISMIC_Support_us_page {
                            _meta {
                                uid
                            }
                        }
                    }

                    current_season_page {
                        ... on PRISMIC_Season {
                            _meta {
                                uid
                            }
                        }
                    }
                    current_show_page {
                        ... on PRISMIC_Show {
                            season {
                                ... on PRISMIC_Season {
                                    _meta {
                                        uid
                                    }
                                }
                            }
                            _meta {
                                uid
                            }
                        }
                    }
                }
            }
        }
    `);

    const links = config.prismic.site_config;

    return {
        about: formatSlug(links.about_page?._meta.uid),
        audition: formatSlug(links.audition_page?._meta.uid),
        contact: formatSlug(links.contact_page?._meta.uid),
        supportUs: formatSlug(links.support_us_page?._meta.uid),
        legal: formatSlug(links.legal_page?._meta.uid),
        seasonArchive: formatSlug(links.season_archive_page?._meta.uid),
        currentSeason:
            formatSlug(links.current_season_page?._meta.uid) ??
            formatSlug(
                links.season_archive_page?._meta.uid
            ) /* Make sure we have a fallback here */,
        currentShow:
            getShowSlug(
                links.current_show_page?._meta.uid,
                links.current_show_page?.season._meta.uid
            ) ??
            formatSlug(
                links.season_archive_page?._meta.uid
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
