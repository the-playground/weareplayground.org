import React from 'react';
import * as Styled from './ShowFeed.styles';

import { ShowFeedCard } from './ShowFeedCard/ShowFeedCard';

const ShowFeed = shows => (
	<Styled.ShowFeed shows={shows}>
		{shows.map((show, index) => (
			<ShowFeedCard key={index} show={show} />
		))}
	</Styled.ShowFeed>
);

export default ShowFeed;
