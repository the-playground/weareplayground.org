import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './BodyTitle.styles';

/**
 * Component: Typography » BodyTitle
 *
 * @description Used for displaying titles that are of less emphasis than headings, such as in cards.
 * @since 1.0.0
 */

const BodyTitle = ({ children, tag, size, color, ...others }) => (
	<Styled.BodyTitle as={tag} color={color} size={size} {...others}>
		{children}
	</Styled.BodyTitle>
);

/**
 * ----------
 * Prop Types
 * ----------
 */

const validBodyTitleSizes = Object.keys(Styled.bodyTitleSizes);
const validBodyTitleColors = Object.keys(Styled.bodyTitleColors);
const validTags = [`span`, `p`, `h3`, `h4`, `h5`, `h6`];

BodyTitle.propTypes = {
	children: PropTypes.node,

	tag: PropTypes.oneOf(validTags),

	/** Size of the Paragraph. Options are s', 'm', and 'l' */
	size: PropTypes.oneOf(validBodyTitleSizes),

	color: PropTypes.oneOf(validBodyTitleColors),
};

/** Color of the Paragraph. Options are 'dark', 'light' */
// color: PropTypes.oneOf(BodyTitleColors),

/**
 * -------------
 * Default Props
 * -------------
 */

BodyTitle.defaultProps = {
	color: `dark`,
	size: `m`,
};

export default BodyTitle;
