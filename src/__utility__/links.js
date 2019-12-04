/**
 * Check to see if the target of the link is internal.
 * This function assumes anything "internal" starts with '/'
 *
 * @param {string} dest
 * @returns {bool}
 */
const isLinkInternal = dest => /^\/(?!\/)/.test(dest);

/**
 * Check to see if the target of the link is a file.
 * @param {*} dest
 * @returns {bool}
 */
const isLinkToFile = dest => /\.[0-9a-z]+$/i.test(dest);

/**
 * Check to see if the passed path is an external link or a link to a file.
 *
 * @param {*} dest
 * @returns {bool}
 */
export const isPageLink = dest => isLinkInternal(dest) || !isLinkToFile(dest);
