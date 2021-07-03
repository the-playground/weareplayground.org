/**
 * Remove any falsy value from an array.
 * Falsy values include: undefined, null, 0, false, NaN and "" (empty string)
 *
 * @param {array} array The array we want to scrub and remove falsy values from
 */
export const scrubArray = <T>(array: (T | undefined)[]): T[] =>
    array.filter((item): item is T => !!item);

/**
 * Checks to see if the previous item in an array exists
 *
 * @param array Any array
 * @param currentIndex The current index from which we will check for the previous item
 * @returns boolean
 */
export const hasValidPreviousArrayItem = <T>(
    array: T[],
    currentIndex: number
): boolean => !!array[currentIndex - 1];

/**
 * Checks to see if the next item in an array exists
 *
 * @param array Any array
 * @param currentIndex The current index from which we will check for the next item
 * @returns boolean
 */
export const hasValidNextArrayItem = <T>(
    array: T[],
    currentIndex: number
): boolean => !!array[currentIndex + 1];

/**
 * Get the previous item in an array
 *
 * @param array Any array
 * @param currentIndex The starting point from which to get the previous array item
 * @returns the next array item OR undefined if it doesn't exist
 */
export const getPreviousArrayItem = <T>(
    array: T[],
    currentIndex: number
): T | undefined =>
    hasValidPreviousArrayItem(array, currentIndex)
        ? array[currentIndex - 1]
        : undefined;

/**
 * Get the next item in an array
 *
 * @param array Any array
 * @param currentIndex The starting point from which to get the next array item
 * @returns the next array item OR undefined if it doesn't exist
 */
export const getNextArrayItem = <T>(
    array: T[],
    currentIndex: number
): T | undefined =>
    hasValidNextArrayItem(array, currentIndex)
        ? array[currentIndex + 1]
        : undefined;

/**
 * Remove a specified item from an array
 * * NOTE: Doesn't mutate the existing array but rather, creates a new one
 *
 * @param array Any array
 * @param itemIndex The index of the array item to remove
 * @returns A new array with the specified index removed
 */
export const removeArrayItem = <T>(array: T[], itemIndex: number): T[] => {
    return [...array.slice(0, itemIndex), ...array.slice(itemIndex)];
};
