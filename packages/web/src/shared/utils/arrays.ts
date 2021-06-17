/**
 * Remove any falsy value from an array.
 * Falsy values include: undefined, null, 0, false, NaN and "" (empty string)
 *
 * @param {array} array The array we want to scrub and remove falsy values from
 */
export const scrubArray = <T>(array: (T | undefined)[]): T[] =>
    array.filter((item): item is T => !!item);
