import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import Prismic from 'prismic-javascript';

/**
 *
 * @param {*} slices
 * @param {*} type
 */
export const getPrismicSlice = ( slices, type ) => {

	const foundSlice = slices.find( (slice) => {
		return slice.type === type
	})

	return foundSlice ? foundSlice.primary : undefined;

}
