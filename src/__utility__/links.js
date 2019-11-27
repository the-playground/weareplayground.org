/**
 * Check to see if the target of the link is internal.
 * This function assumes anything "internal" starts with '/'
 *
 * @param {string} dest
 * @returns {bool}
 */
export const isLinkInternal = dest => /^\/(?!\/)/.test(dest);

/**
 * Check to see if the target of the link is a file.
 * @param {*} dest
 * @returns {bool}
 */
export const isLinkToFile = dest => /^\/(?!\/)/.test(dest);
