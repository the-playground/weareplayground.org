import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Button.styles';
import { isLinkInternal, isLinkToFile } from '../../../__utility__/links';

/**
 * A flexible button component that can render either a traditional button
 * or a text button as either an internal or external link.
 *
 * @since 1.0.0
 */
const Button = ({ children, to, type, size, theme, icon, iconLocation, ...others }) => {
	/**
	 * If the link is to an external destination, or to a file,
	 * render as a standard  'a' tag with appropriate props
	 */
	if (!isLinkInternal || isLinkToFile) {
		return <Styled.Button as="a" {...others}></Styled.Button>;
	}

	return (
		<Styled.Button to={to} type={type} theme={theme} icon={icon} iconLocation={iconLocation} {...others}>
			{children}
		</Styled.Button>
	);
};

const buttonTypes = ['standard', 'text'];

Button.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
	type: PropTypes.oneOf(buttonTypes),
	theme: PropTypes.string,
	others: PropTypes.any,
};

Button.defaultProps = {
	type: 'standard',
	theme: 'green',
};

export default Button;
