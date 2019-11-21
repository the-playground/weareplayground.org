import styled from 'styled-components';
import { typography } from '../../../../__tokens__';

export const bodyTextColors = {
	dark: '',
	light: '',
	// dark: props => props.theme.ui.typography.dark,
	// light: props => props.theme.ui.typography.light,
};

export const bodyTextSizes = {
	l: props => (props.isBold ? typography.bodyTextBold.Large : typography.bodyText.Large),
	m: props => (props.isBold ? typography.bodyTextBold.Medium : typography.bodyText.Medium),
	s: props => (props.isBold ? typography.bodyTextBold.Small : typography.bodyText.Small),
};

export const BodyText = styled.p`
	${props => bodyTextSizes[props.size]};

	strong {
		/* Set weight */
	}
`;
/* color: ${props => commonTextColors[props.color]}; */
