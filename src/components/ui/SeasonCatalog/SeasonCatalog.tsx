import React from 'react';

// Import components
import { SeasonCard } from '../SeasonCard/SeasonCard';
import * as Styled from './__styles';
import { SeasonCatalogProps } from './__types';

export const SeasonCatalog: React.FC<SeasonCatalogProps> = ({ seasons }) => (
    <Styled.SeasonCatalog>
        {seasons!.map((season) => (
            <SeasonCard
                className="card"
                key={season.node?.title}
                season={season}
            />
        ))}
    </Styled.SeasonCatalog>
);
