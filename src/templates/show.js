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
const performancesShape = PropTypes.arrayOf(PropTypes.shape({}));
const artistsShape = PropTypes.arrayOf(PropTypes.shape({}));
const sponsorsShape = PropTypes.arrayOf(PropTypes.shape({}));
const locationShape = PropTypes.shape({});
const bodyShape = PropTypes.arrayOf(PropTypes.shape({}));

ShowLanding.propTypes = {
	data: PropTypes.shape({
		prismic: PropTypes.shape({
			show: PropTypes.shape({
				title: PropTypes.string.isRequired,
				author: PropTypes.string.isRequired,
				author_link: PropTypes.shape({
					url: PropTypes.string.isRequired,
				}),
				script_link: PropTypes.shape({
					url: PropTypes.string.isRequired,
				}),
				performances: performancesShape,
				artists: artistsShape,
				location: locationShape,
				sponsors: sponsorsShape,
				body: bodyShape,
			}).isRequired,
		}),
	}).isRequired,
};

export default ShowLanding;
