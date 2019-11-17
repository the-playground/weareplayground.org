import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { SEOPageMeta } from '../components/SEO';
import { getSlice } from '../__utility__/prismic';
import { Layout } from '../components/Layout';

const ShowLanding = ({ data, pageContext }) => {
	const { show } = data.prismic;
	const { uid } = pageContext;

	if (!show) return <></>;

	const showMeta = getSlice(show.body, 'basic_seo');

	return (
		<Layout>
			<SEOPageMeta metadata={showMeta} />
			{show.title}
			<button
				type="button"
				className="snipcart-add-item"
				data-item-id={uid}
				data-item-price="20.00"
				data-item-url="https://weareplayground.org/shows/the-breakfast-club"
				data-item-description="The Breakfast Club Presented by The Playground"
				data-item-name={show.title}
			>
				Purchase Tickets
			</button>
		</Layout>
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
