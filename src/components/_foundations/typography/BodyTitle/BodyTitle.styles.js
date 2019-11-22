import styled from 'styled-components';
import { typography } from '../../../../__tokens__';

export const bodyTitleColors = {
	dark: '',
	light: '',
	// dark: props => props.theme.ui.typography.dark,
	// light: props => props.theme.ui.typography.light,
};

export const bodyTitleSizes = {
	xl: typography.bodyTextBold.XLarge,
	l: typography.bodyTextBold.Large,
	m: typography.bodyTextBold.Medium,
	s: typography.bodyTextBold.Small,
};

export const BodyTitle = styled.p`
	${props => bodyTitleSizes[props.size]};
	text-transform: uppercase;
`;
/* color: ${props => commonTextColors[props.color]}; */
