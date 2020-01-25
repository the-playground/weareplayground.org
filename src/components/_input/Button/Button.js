import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Button.styles';
import { isPageLink } from '../../../__utility__/links';

/**
 * A flexible button component that can render either a traditional button
 * or a text button as either an internal or external link.
 *
 * @since 1.0.0
 */
const Button = ({ children, to, type, size, theme, iconLeft, iconRight, isInteraction, ...others }) => {
	if (isInteraction) {
		return (
			<Styled.Button as="button" {...others}>
				{iconLeft || ''}
				{children}
				{iconRight || ''}
			</Styled.Button>
		);
	}

	/**
	 * If the link is to an external destination, or to a file,
	 * render as a standard  'a' tag with appropriate props
	 */
	if (!isPageLink(to)) {
		return (
			<Styled.Button as="a" href={to} {...others} rel="noopener" target="_blank">
				{iconLeft || ''}
				{children}
				{iconRight || ''}
			</Styled.Button>
		);
	}

	return (
		<Styled.Button to={to} type={type} theme={theme} {...others}>
			{iconLeft || ''}
			{children}
			{iconRight || ''}
		</Styled.Button>
	);
};

const buttonSizes = ['s', 'm', 'l'];

const buttonTypes = ['standard', 'text'];

Button.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string,
	type: PropTypes.oneOf(buttonTypes),
	theme: PropTypes.string,
	others: PropTypes.any,
	iconLeft: PropTypes.elementType,
	iconRight: PropTypes.elementType,
	isInteraction: PropTypes.bool,
	sizes: PropTypes.oneOf(buttonSizes),
};

Button.defaultProps = {
	type: 'standard',
	theme: 'green',
	to: '/',
	sizes: 'm',
};

export default Button;
