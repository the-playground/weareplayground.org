import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './ShowsFeed.styles';

import { ShowFeedCard } from './ShowFeedCard/ShowFeedCard';

const ShowsFeed = ({ shows }) => (
	<Styled.ShowsFeed>
		{shows.map((show, index) => (
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
	shows: PropTypes.object.isRequired,
};

export default ShowsFeed;
