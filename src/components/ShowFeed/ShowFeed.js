import React from 'react';
import * as Styled from './ShowFeed.styles';

import { ShowFeedCard } from './ShowFeedCard';

const ShowFeed = shows => (
	<>
		{shows.map((show, index) => (
			<ShowFeedCard key={index} show={show} />
		))}
	</>
);

export default ShowFeed;