import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './BodyText.styles';

/**
 * Component: Typography » BodyText
 *
 * @description Used for displaying common "body" text.
 * @since 1.0.0
 */

const BodyText = ({ children, tag, size, color, isBold, ...others }) => (
	<Styled.BodyText as={tag} color={color} size={size} isBold={isBold} {...others}>
		{children}
	</Styled.BodyText>
);

/**
 * ----------
 * Prop Types
 * ----------
 */

const validBodyTextSizes = Object.keys(Styled.bodyTextSizes);
const validBodyTextColors = Object.keys(Styled.bodyTextColors);
const validTags = ['span', 'a'];

BodyText.propTypes = {
	children: PropTypes.node,

	tag: PropTypes.oneOf(validTags),

	/** Size of the Paragraph. Options are s', 'm', and 'l' */
	size: PropTypes.oneOf(validBodyTextSizes),

	color: PropTypes.oneOf(validBodyTextColors),

	isBold: PropTypes.bool,
};

/** Color of the Paragraph. Options are 'dark', 'light' */
// color: PropTypes.oneOf(BodyTextColors),

/**
 * -------------
 * Default Props
 * -------------
 */

BodyText.defaultProps = {
	color: 'dark',
	size: 'm',
	isBold: false,
};

export default BodyText;
