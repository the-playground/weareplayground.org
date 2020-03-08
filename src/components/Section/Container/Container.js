import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Container.styles';

const Container = ({ children, size, ...others }) => (
    <Styled.Container size={size} {...others}>
        {children}
    </Styled.Container>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

Container.defaultProps = {};

export default Container;
