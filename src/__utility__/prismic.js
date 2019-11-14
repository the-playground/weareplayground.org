/**
 *
 * @param {*} slices
 * @param {*} type
 */
export const getPrismicSlice = (slices, type) => {
	const foundSlice = slices.find(slice => slice.type === type);

	return foundSlice ? foundSlice.primary : undefined;
};
