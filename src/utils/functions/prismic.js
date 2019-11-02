export const getPrismicSlice = ( slices, type ) => {

	const foundSlice = slices.find( (slice) => {
		return slice.type === type
	})

	return foundSlice ? foundSlice.primary : undefined;

}
