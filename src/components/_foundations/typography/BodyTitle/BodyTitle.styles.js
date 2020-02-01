import styled from 'styled-components';
import { typography } from '../../../../__tokens__';

export const bodyTitleColors = {
	dark: '',
	light: '',
	// dark: props => props.theme.ui.typography.dark,
	// light: props => props.theme.ui.typography.light,
};

export const bodyTitleSizes = {
	l: typography.bodyTitle.Large,
	m: typography.bodyTitle.Medium,
	s: typography.bodyTitle.Small,
};

export const BodyTitle = styled.p`
	${props => bodyTitleSizes[props.size]};
`;
/* color: ${props => commonTextColors[props.color]}; */
