import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { SEOPageMeta, SEOStructuredDataGraph, SEOSchema } from '../components/SEO';
import { useConfigContext } from '../__hooks__/useContext';
import { getSlice } from '../__utility__/prismic';
import { Layout } from '../components/Layout';

const ShowLanding = ({ data, pageContext }) => {
	const { show } = data.prismic;
	const { uid, seasonUID, seasonURL } = pageContext;

	const showMeta = getSlice(show.body, 'basic_seo');

	const config = useConfigContext();

	if (!show || !config) return <></>;

	const schemas = [<SEOSchema type="Organization" data={config.company} />];

	return (
		<Layout>
			<SEOPageMeta metadata={showMeta} />
			<SEOStructuredDataGraph schemas={schemas} />
			{show.title}
		</Layout>
	);
};

export const query = graphql`
	query showData($uid: String!) {
		prismic {
			show(lang: "en-us", uid: $uid) {
				...FullShowDataFragment
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
const bodyShape = PropTypes.arrayOf(PropTypes.shape({})).isRequired;

ShowLanding.propTypes = {
	data: PropTypes.shape({
		prismic: PropTypes.shape({
			show: PropTypes.shape({
				title: PropTypes.string.isRequired,
				author: PropTypes.string.isRequired,
				author_link: PropTypes.shape({
					url: PropTypes.string,
				}),
				script_link: PropTypes.shape({
					url: PropTypes.string,
				}),
				performances: performancesShape,
				artists: artistsShape,
				location: locationShape,
				sponsors: sponsorsShape,
				body: bodyShape,
			}).isRequired,
		}).isRequired,
	}).isRequired,
	pageContext: PropTypes.shape({
		uid: PropTypes.string.isRequired,
	}),
};

export default ShowLanding;
