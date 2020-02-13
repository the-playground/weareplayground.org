import styled from 'styled-components';

import { Season } from '../../../__interfaces__/season';

export const SeasonCatalog = styled.div<SeasonCatalogProps>`
	max-width: 1200px;
	margin: 0 auto;
`;

export interface SeasonCatalogProps {
	seasons?: Season[];
}
