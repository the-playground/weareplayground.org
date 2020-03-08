import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './GrungeHeading.styles';

/**
 * Component: Typography » GrungeHeading
 *
 * @description Used for displaying titles that should have some impact!
 * @since 1.0.0
 */

const GrungeHeading = ({ children, tag, size, color, ...others }) => (
    <Styled.GrungeHeading as={tag} color={color} size={size} {...others}>
        {children}
    </Styled.GrungeHeading>
);

/**
 * ----------
 * Prop Types
 * ----------
 */

const validHeadingSizes = Object.keys(Styled.headingSizes);
const validHeadingColors = Object.keys(Styled.headingColors);
const validTags = [`h1`, `h2`, `h3`, `h4`, `span`];

GrungeHeading.propTypes = {
    children: PropTypes.node,

    tag: PropTypes.oneOf(validTags),

    size: PropTypes.oneOf(validHeadingSizes),

    color: PropTypes.oneOf(validHeadingColors),
};

/**
 * -------------
 * Default Props
 * -------------
 */

GrungeHeading.defaultProps = {
    color: `dark`,
    size: `m`,
};

export default GrungeHeading;
