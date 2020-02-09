import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SeasonCatalog } from '../components/season';

const SeasonsPage = ({ data }) => {
	const seasons = data?.prismic?.allSeasons?.edges;
	const pageData = data?.prismic?.seasons_page; // eslint-disable-line

	if (!seasons || !pageData) {
		return <></>;
	}

	return (
		<Layout>
			{/* Seasons Hero Goes Here */}
			<SeasonCatalog seasons={seasons} />
			{/* Seasons CTA Goes Here */}
		</Layout>
	);
};

export const query = graphql`
	query SeasonsPageData {
		...SeasonsPageFragment
		...AllSeasonsSortedFragment
	}
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

SeasonsPage.propTypes = {
	data: PropTypes.shape({
		prismic: PropTypes.shape({
			seasons_page: PropTypes.object.isRequired,
			allSeasons: PropTypes.object.isRequired,
		}).isRequired,
	}).isRequired,
};

export default SeasonsPage;
