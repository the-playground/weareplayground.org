import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Section.styles';

const Section = ({ children, useContainer, slant, texture, ...others }) => {
	if (useContainer) {
		return (
			<Styled.Section useContainer slant texture {...others}>
				{children}
			</Styled.Section>
		);
	}

	return (
		<Styled.Section useContainer slant texture {...others}>
			{children}
		</Styled.Section>
	);
};

Section.propTypes = {
	children: PropTypes.node.isRequired,
	useContainer: PropTypes.bool,
};

Section.defaultProps = {
	useContainer: false,
};

export default Section;
