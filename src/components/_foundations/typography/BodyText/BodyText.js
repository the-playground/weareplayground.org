import React from 'react';
import PropTypes from 'prop-types';

// import { bodyTextSizes, bodyTextColors } from './BodyText.styles';
import * as Styled from './BodyText.styles';

/**
 * Component: Typography » BodyText
 *
 * @description Used for displaying common "body" text.
 * @since 1.0.0
 */

const BodyText = ({ children, tag, size, color, isBold, ...others }) => (
	<Styled.BodyText as={tag} color={color} size={size} {...others}>
		{children}
	</Styled.BodyText>
);

/**
 * ----------
 * Prop Types
 * ----------
 */

// const BodyTextSizes = Object.keys(bodyTextSizes);
// const BodyTextColors = Object.keys(bodyTextColors);

// BodyText.propTypes = {
// 	children: PropTypes.node,

// 	/** Color of the Paragraph. Options are 'dark', 'light' */
// 	color: PropTypes.oneOf(BodyTextColors),

// 	/** Size of the Paragraph. Options are 'xs', 's', 'm', and 'l' */
// 	size: PropTypes.oneOf(BodyTextSizes),
// };

/**
 * -------------
 * Default Props
 * -------------
 */

BodyText.defaultProps = {
	color: 'dark',
	size: 's',
	isBold: false,
};

export default BodyText;
