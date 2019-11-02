/**
 * Return the full current URL path without query strings.
 */
export const getCurrentRootURL  = () => {
	return `${window.location.protocol}//${window.location.hostname}${window.location.pathname}`;
}
