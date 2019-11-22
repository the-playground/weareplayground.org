import styled from 'styled-components';
import { typography } from '../../../../__tokens__';

export const headingColors = {
	dark: '',
	light: '',
	// dark: props => props.theme.ui.typography.dark,
	// light: props => props.theme.ui.typography.light,
};

export const headingSizes = {
	m: typography.grungeHeading.Medium,
	s: typography.grungeHeading.Small,
};

export const GrungeHeading = styled.span`
	${props => headingSizes[props.size]};
`;
/* color: ${props => commonTextColors[props.color]}; */
