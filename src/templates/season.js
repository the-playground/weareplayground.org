import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { SEOPageMeta } from '../components/SEO';
import { getSlice } from '../__utility__/prismic';
import { Layout } from '../components/Layout';

const SeasonLanding = ({ data, pageContext }) => {
	const { season } = data.prismic;
	const { uid, allSeasonsURL } = pageContext;

	if (!season) return <></>;

	console.log(season);

	return <Layout>{season.title}</Layout>;
};

export const query = graphql`
	query seasonData($uid: String!) {
		prismic {
			season(lang: "en-us", uid: $uid) {
				title
				tagline
				description
				hero_image
				body {
					... on PRISMIC_SeasonBodyBasic_seo {
						type
						primary {
							meta_description
							meta_image
							meta_title
							twitter_card_image
						}
					}
				}
				shows {
					show {
						... on PRISMIC_Show {
							...ShowCatalogDataFragment
						}
					}
				}
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
		allSeasonsURL: PropTypes.string.isRequired,
	}),
};

export default SeasonLanding;
