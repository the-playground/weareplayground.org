/**
 *
 * @param {*} slices
 * @param {*} type
 */
export const getSlice = (slices, type) => {
    const foundSlice = slices.find(slice => slice.type === type);

    return foundSlice && foundSlice.primary ? foundSlice.primary : undefined;
};
