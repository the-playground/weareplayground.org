import styled from 'styled-components';
import { Link } from 'gatsby';

import { Season } from '../../../__interfaces__/Season';

export const SeasonCardLink = styled(Link)``;
export const SeasonCard = styled.article<SeasonCardProps>``;

export interface SeasonCardProps {
    season?: Season;
}
