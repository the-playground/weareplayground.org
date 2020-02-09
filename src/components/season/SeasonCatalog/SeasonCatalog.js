import React from 'react';
import PropTypes from 'prop-types';

import { SeasonCard } from '../SeasonCard/SeasonCard';

import * as Styled from './SeasonCatalog.styles';

export const SeasonCatalog = ({ seasons }) => (
	<Styled.SeasonCatalog>
		{seasons.map(season => (
			<SeasonCard key={season.node?.title} data={season.node} />
		))}
	</Styled.SeasonCatalog>
);

/**
 * ----------
 * Prop Types
 * ----------
 */

SeasonCatalog.propTypes = {
	seasons: PropTypes.arrayOf(
		PropTypes.shape({
			node: PropTypes.shape({
				title: PropTypes.string.isRequired,
			}).isRequired,
		}).isRequired
	).isRequired,
};
