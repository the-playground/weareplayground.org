import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { typography } from '../../../__tokens__';

export const textLinkSizes = {
	m: typography.bodyBold.Medium,
	s: typography.bodyBold.Small,
};

export const textLinkColors = {};

export const TextLink = styled(Link)`
	${props =>
		props.activeStyle &&
		css`
			color: red;
		`}
`;
