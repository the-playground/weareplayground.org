import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './TextLink.styles';
import { isLinkInternal, isLinkToFile } from '../../../__utility__/links';

const TextLink = ({ children, to, activeClassName, partiallyActive, ...others }) => {
	/**
	 * If the link is to an external destination, or to a file,
	 * render as a standard  'a' tag with appropriate props
	 */
	if (!isLinkInternal || isLinkToFile) {
		return (
			<Styled.TextLink as="a" {...others}>
				{children}
			</Styled.TextLink>
		);
	}

	return (
		<Styled.TextLink to={to} partiallyActive={partiallyActive} activeClassName={activeClassName} {...others}>
			{children}
		</Styled.TextLink>
	);
};

TextLink.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.string.isRequired,
	activeClassName: PropTypes.string,
	partiallyActive: PropTypes.bool,
	others: PropTypes.any,
};

TextLink.defaultProps = {
	activeClassName: '--active',
};

export default TextLink;
