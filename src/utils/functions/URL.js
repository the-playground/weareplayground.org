/**
 * Return the full current URL path without query strings.
 */
export const getCurrentRootURL  = () => {
	return typeof window !== 'undefined'
		? `${window.location.protocol}//${window.location.hostname}${window.location.pathname}`
		: '';
}
