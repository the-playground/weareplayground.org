import React from 'react';

// Import components
import { SeasonCard } from '../SeasonCard/SeasonCard';
import * as Styled from './SeasonCatalog.styles';
import { SeasonCatalogProps } from './SeasonCatalog.interfaces';

export const SeasonCatalog: React.FC<SeasonCatalogProps> = ({ seasons }) => (
	<Styled.SeasonCatalog>
		{seasons!.map(season => (
			<SeasonCard key={season.node?.title} season={season} />
		))}
	</Styled.SeasonCatalog>
);
