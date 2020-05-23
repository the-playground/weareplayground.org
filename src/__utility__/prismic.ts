/**
 *
 * @param {*} slices
 * @param {*} type
 */
export const getSlice = (slices: any, type: any) => {
    const foundSlice = slices.find((slice: any) => slice.type === type);

    return foundSlice && foundSlice.primary ? foundSlice.primary : undefined;
};
