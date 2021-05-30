import { useStaticQuery, graphql } from 'gatsby';

import { SEASON_ROOT_SLUG } from '@nerve/domains/season';
import { BLOG_ROOT_SLUG } from '@nerve/domains/blog';

import { buildNestedSlugPath, normalizeSlug } from '@nerve/shared/lib';

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
                supportUsPage {
                    slug {
                        current
                    }
                }
                sitemap
            }
        }
    `);

    const links = sanityLinkMapConfig;

    return {
        blogPage: normalizeSlug(links?.blogPage?.slug?.current),
        archivePage: normalizeSlug(links?.showArchivePage?.slug?.current),
        supportUsPage: normalizeSlug(links?.supportUsPage?.slug?.current),
        sitemap: links?.sitemap,
        getShow: (season, show) =>
            buildNestedSlugPath([SEASON_ROOT_SLUG, season, show]),
        getSeason: (season) => buildNestedSlugPath([SEASON_ROOT_SLUG, season]),
        getPost: (post) =>
            buildNestedSlugPath([BLOG_ROOT_SLUG, post]) ?? BLOG_ROOT_SLUG,
    };
};

export interface LinkMapConfig {
    blogPage: string | null;
    archivePage: string | null;
    supportUsPage: string | null;
    sitemap: string;
    getShow: (season: string, show: string) => string | null;
    getSeason: (season: string) => string | null;
    getPost: (post: string) => string;
}
