import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './BodyBold.styles';

/**
 * Component: Typography » BodyBold
 *
 * @description Used for displaying bold "body" text.
 * @since 1.0.0
 */

const BodyBold = ({ children, tag, size, color, ...others }) => (
	<Styled.BodyBold as={tag} color={color} size={size} {...others}>
		{children}
	</Styled.BodyBold>
);

/**
 * ----------
 * Prop Types
 * ----------
 */

const validBodyBoldSizes = Object.keys(Styled.bodyBoldSizes);
const validBodyBoldColors = Object.keys(Styled.bodyBoldColors);
const validTags = [`span`, `p`];

BodyBold.propTypes = {
	children: PropTypes.node,

	tag: PropTypes.oneOf(validTags),

	/** Size of the Paragraph. Options are s', 'm', and 'l' */
	size: PropTypes.oneOf(validBodyBoldSizes),

	color: PropTypes.oneOf(validBodyBoldColors),
};

/** Color of the Paragraph. Options are 'dark', 'light' */
// color: PropTypes.oneOf(BodyBoldColors),

/**
 * -------------
 * Default Props
 * -------------
 */

BodyBold.defaultProps = {
	color: `dark`,
	size: `m`,
};

export default BodyBold;
