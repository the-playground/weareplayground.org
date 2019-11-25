import styled from 'styled-components';
import { typography } from '../../../../__tokens__';

export const bodyTextColors = {
	dark: '',
	light: '',
	// dark: props => props.theme.ui.typography.dark,
	// light: props => props.theme.ui.typography.light,
};

export const bodyTextSizes = {
	xl: typography.bodyText.XLarge,
	l: typography.bodyText.Large,
	m: typography.bodyText.Medium,
	s: typography.bodyText.Small,
};

export const BodyText = styled.p`
	${props => bodyTextSizes[props.size]};

	strong {
		/* Set weight */
	}
`;
/* color: ${props => bodyTextColors[props.color]}; */
