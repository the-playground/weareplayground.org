import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Heading.styles';

/**
 * Component: Typography » Heading
 *
 * @description Used for displaying titles that are of less emphasis than headings, such as in cards.
 * @since 1.0.0
 */

const Heading = ({ children, tag, size, color, isUppercase, isLowercase, ...others }) => (
	<Styled.Heading as={tag} color={color} size={size} isUppercase={isUppercase} isLowercase={isLowercase} {...others}>
		{children}
	</Styled.Heading>
);

/**
 * ----------
 * Prop Types
 * ----------
 */

const validHeadingSizes = Object.keys(Styled.headingSizes);
const validHeadingColors = Object.keys(Styled.headingColors);
const validTags = [`h1`, `h2`, `h3`, `h4`, `span`];

Heading.propTypes = {
	children: PropTypes.node,

	tag: PropTypes.oneOf(validTags),

	/** Size of the Paragraph. Options are s', 'm', and 'l' */
	size: PropTypes.oneOf(validHeadingSizes),

	color: PropTypes.oneOf(validHeadingColors),

	isUppercase: PropTypes.bool,

	isLowercase: PropTypes.bool,
};

/**
 * -------------
 * Default Props
 * -------------
 */

Heading.defaultProps = {
	color: `dark`,
	size: `m`,
	tag: `span`,
	isUppercase: false,
	isLowercase: false,
};

export default Heading;
