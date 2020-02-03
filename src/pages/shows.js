import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from '../components/Layout';

const ShowsPage = ({ data }) => {
	const shows = data?.prismic?.allShows?.edges;

	return (
		<Layout>
			{shows.map(show => {
				const showData = show.node;
			})}
		</Layout>
	);
};

export const query = graphql`
	query ShowsPageData {
		...AllShowsFragment
	}
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

ShowsPage.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ShowsPage;
