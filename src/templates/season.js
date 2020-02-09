import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { SEOPageMeta } from '../components/SEO';
import { getSlice } from '../__utility__/prismic';
import { Layout } from '../components/Layout';

const SeasonLanding = ({ data, pageContext }) => {
	const { season } = data.prismic;
	const { uid } = pageContext;
	console.log(pageContext);
	if (!season) return <></>;

	return <Layout>{season.title}</Layout>;
};

export const query = graphql`
	query seasonData($uid: String!) {
		prismic {
			season(lang: "en-us", uid: $uid) {
				title
			}
		}
	}
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

const bodyShape = PropTypes.arrayOf(PropTypes.shape({})).isRequired;

SeasonLanding.propTypes = {
	data: PropTypes.shape({
		prismic: PropTypes.shape({
			season: PropTypes.shape({
				title: PropTypes.string.isRequired,
				body: bodyShape,
			}).isRequired,
		}).isRequired,
	}).isRequired,
	pageContext: PropTypes.shape({
		uid: PropTypes.string.isRequired,
	}),
};

export default SeasonLanding;
