import React from 'react';

// Import components
import { SeasonCard } from '../SeasonCard/SeasonCard';
import * as Styled from './SeasonCatalog.styles';

export const SeasonCatalog: React.FC<Styled.SeasonCatalogProps> = ({ seasons }) => (
	<Styled.SeasonCatalog>
		{seasons!.map(season => (
			<SeasonCard key={season.node?.title} season={season} />
		))}
	</Styled.SeasonCatalog>
);
