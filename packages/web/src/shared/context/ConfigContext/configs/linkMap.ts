import { SEASON_ROOT_SLUG } from '@nerve/domains/season';
import { BLOG_ROOT_SLUG } from '@nerve/domains/blog';

import { buildNestedSlugPath, normalizeSlug } from '@nerve/shared/lib';

export const buildLinkMapConfig = (
    links: ILinkMapConfigQueryData
): ILinkMapConfig => {
    return {
        blogPage: normalizeSlug(links.blogPage),
        archivePage: normalizeSlug(links.showArchivePage),
        sitemap: links.sitemap,
        getShow: (season, show) =>
            buildNestedSlugPath([SEASON_ROOT_SLUG, season, show]),
        getSeason: (season) => buildNestedSlugPath([SEASON_ROOT_SLUG, season]),
        getPost: (post) =>
            buildNestedSlugPath([BLOG_ROOT_SLUG, post]) ?? BLOG_ROOT_SLUG,
    };
};

export const linkMapConfigQuery = `*[_type == "linkMapConfig"][0] {
    "blogPage": blogPage->slug.current,
    "showArchivePage": showArchivePage->slug.current,
    sitemap
}`;

export interface ILinkMapConfigQueryData {
    blogPage: string;
    showArchivePage: string;
    sitemap: string;
}

export interface ILinkMapConfig {
    blogPage: string | null;
    archivePage: string | null;
    sitemap: string;
    getShow: (season: string, show: string) => string | null;
    getSeason: (season: string) => string | null;
    getPost: (post: string) => string;
}
