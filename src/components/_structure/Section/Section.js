import React from 'react';
import PropTypes from 'prop-types';

import { SectionContainer } from './Container';
import * as Styled from './Section.styles';

// Considerations for container, background-color, background-image, overlays, textures, slants, parallax?

const Section = ({ children, container, slant, ...others }) => {
	if (container) {
		return (
			<Styled.Section container={container} slant={slant} {...others}>
				{children}
			</Styled.Section>
		);
	}

	return (
		<Styled.Section container={container} slant={slant} {...others}>
			{children}
		</Styled.Section>
	);
};

Section.propTypes = {
	children: PropTypes.node.isRequired,
	container: PropTypes.bool,
};

Section.defaultProps = {
	container: false,
};

export default Section;
