import styled from 'styled-components';
import typography from '../../../../__ui__/tokens/typography/typography';

export const bodyTextColors = {
	// dark: props => props.theme.ui.typography.dark,
	// light: props => props.theme.ui.typography.light,
};

export const bodyTextSizes = {
	l: typography.bodyText.Large,
	m: typography.bodyText.Medium,
	s: typography.bodyText.Small,
};

export const BodyText = styled.p`
	margin: 0;
	${props => bodyTextSizes[props.size]};

	strong {
		/* Set weight */
	}
`;
/* color: ${props => commonTextColors[props.color]}; */
