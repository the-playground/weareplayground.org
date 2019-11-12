/**
 * Return the full current URL path without query strings.
 *
 * TODO: https://github.com/gatsbyjs/gatsby/issues/309
 */
export const getCurrentRootURL  = () => {
	return typeof window !== 'undefined'
		? `${window.location.protocol}//${window.location.hostname}${window.location.pathname}`
		: '';
}
