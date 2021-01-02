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
    parentUID && childUID
        ? normalizeSlug(`${parentUID}/${childUID}`)
        : undefined;
/**
 * Set the base URL identifier for shows and seasons.
 * To be constructed as such: `base/season/show`.
 *
 * Example: `/s/2018-2019/assistance`
 */
export const seasonSlugBase = 's';

/**
 *
 * @param showSlug
 * @param seasonSlug
 */
export const getShowSlug = (showSlug: string, seasonSlug: string) =>
    normalizeSlug(`${seasonSlugBase}/${seasonSlug}/${showSlug}`);

/**
 *
 * @param seasonSlug
 */
export const getSeasonSlug = (seasonSlug: string) =>
    seasonSlug ? normalizeSlug(`${seasonSlugBase}/${seasonSlug}`) : undefined;
