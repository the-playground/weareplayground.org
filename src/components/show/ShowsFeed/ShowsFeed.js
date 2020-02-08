import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './ShowsFeed.styles';

import { ShowFeedCard } from './ShowFeedCard/ShowFeedCard';

const ShowsFeed = ({ shows }) => (
	<Styled.ShowsFeed>
		{shows.map(show => (
			<ShowFeedCard key={show.node.title} show={show.node} />
		))}
	</Styled.ShowsFeed>
);

/**
 * ----------
 * Prop Types
 * ----------
 */

ShowsFeed.propTypes = {
	shows: PropTypes.arrayOf(
		PropTypes.shape({
			node: PropTypes.shape({
				title: PropTypes.string.isRequired,
			}).isRequired,
		}).isRequired
	).isRequired,
};

export default ShowsFeed;
