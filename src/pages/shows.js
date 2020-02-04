import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { ShowFeed } from '../components/show';

const ShowsPage = ({ data }) => {
	const shows = data?.prismic?.allShows?.edges;

	if (!shows) {
		return <></>;
	}

	return (
		<Layout>
			<ShowFeed shows={shows} />
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
