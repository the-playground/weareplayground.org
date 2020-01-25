import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './TextLink.styles';
import { isPageLink } from '../../../__utility__/links';

const TextLink = ({ children, to, activeClassName, partiallyActive, iconLeft, iconRight, ...others }) => {
	/**
	 * If the link is to an external destination, or to a file,
	 * render as a standard  'a' tag with appropriate props
	 */
	if (!isPageLink(to)) {
		return (
			<Styled.TextLink as="a" href={to} {...others} rel="noopener" target="_blank">
				{iconLeft || ''}
				{children}
				{iconRight || ''}
			</Styled.TextLink>
		);
	}

	return (
		<Styled.TextLink to={to} partiallyActive={partiallyActive} activeClassName={activeClassName} {...others}>
			{iconLeft || ''}
			{children}
			{iconRight || ''}
		</Styled.TextLink>
	);
};

TextLink.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
	activeClassName: PropTypes.string,
	partiallyActive: PropTypes.bool,
	iconLeft: PropTypes.elementType,
	iconRight: PropTypes.elementType,
	others: PropTypes.any,
};

TextLink.defaultProps = {
	activeClassName: '--active',
};

export default TextLink;
