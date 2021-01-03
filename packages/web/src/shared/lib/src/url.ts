import { SEASON_ROOT_SLUG } from '@nerve/domains/season';
import { BLOG_ROOT_SLUG } from '@nerve/domains/blog';
import { isSSR } from './ssr';

/**
 * Return the full current URL path without query strings.
 */
export const getCurrentRootURL = () =>
    isSSR
        ? ``
        : `${window.location.protocol}//${window.location.hostname}${window.location.pathname}`;

/**
 * Strip all leading and trailing slashes from slugs
 *
 * @link https://stackoverflow.com/questions/3840600/javascript-regular-expression-remove-first-and-last-slash
 *
 * @param slug The slug to process
 */
export const normalizeSlug = (slug: string) => {
    const normalizedSlug = slug.replace(/^\/|\/$/g, '');
    return `/${normalizedSlug}`;
};

/**
 * Build a multi-layerd slug with a parent/child relationship
 *
 * @param parentUID The slug of the parent page
 * @param childUID The slug of the child page
 */
export const getChildPageSlug = (parentUID: string, childUID: string) =>
    parentUID && childUID ? normalizeSlug(`${parentUID}/${childUID}`) : null;

/**
 *
 * @param showSlug
 * @param seasonSlug
 */
export const getShowSlug = (showSlug: string, seasonSlug: string) =>
    normalizeSlug(`${SEASON_ROOT_SLUG}/${seasonSlug}/${showSlug}`);

/**
 *
 * @param seasonSlug
 */
export const getSeasonSlug = (seasonSlug: string) =>
    seasonSlug ? normalizeSlug(`${SEASON_ROOT_SLUG}/${seasonSlug}`) : null;

/**
 *
 * @param blogSlug
 */
export const getBlogSlug = (blogSlug: string) =>
    blogSlug ? normalizeSlug(`${BLOG_ROOT_SLUG}/${blogSlug}`) : null;
