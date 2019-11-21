import { isSSR } from './ssr';

/**
 * Return the full current URL path without query strings.
 *
 * TODO: https://github.com/gatsbyjs/gatsby/issues/309
 */
export const getCurrentRootURL = () => (isSSR ? '' : `${window.location.protocol}//${window.location.hostname}${window.location.pathname}`);
