import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './ShowFeed.styles';

import { ShowFeedCard } from './ShowFeedCard/ShowFeedCard';

const ShowFeed = ({ shows }) => (
	<Styled.ShowFeed>
		{shows.map((show, index) => (
			<ShowFeedCard key={index} show={show.node} />
		))}
	</Styled.ShowFeed>
);

/**
 * ----------
 * Prop Types
 * ----------
 */

ShowFeed.propTypes = {
	shows: PropTypes.object.isRequired,
};

export default ShowFeed;
