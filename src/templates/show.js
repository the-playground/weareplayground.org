import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Show } from '../components/Show';
import { SEOPageMeta } from '../components/SEO';
import { getSlice } from '../__utility__/prismic';

const ShowLanding = ({ data }) => {
	const { show } = data.prismic;
	const showMeta = getSlice(show.body, 'basic_seo');

	return (
		<>
			<SEOPageMeta metadata={showMeta} />
			<Show />
		</>
	);
};

export const query = graphql`
	query showData($uid: String!) {
		prismic {
			show(lang: "en-us", uid: $uid) {
				...expandedShowDataFragment
			}
		}
	}
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

ShowLanding.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ShowLanding;
