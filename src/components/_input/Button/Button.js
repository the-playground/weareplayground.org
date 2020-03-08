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

const Button = ({ children, to, type, size, variant, iconLeft, iconRight, ...others }) => {
    /**
     * If the button is purely for UI interaction, it should not be created as as a link with an "a" tag,
     * but as a simple raw button with the correct props.
     */
    if (!to) {
        return (
            <Styled.Button as="button" size={size} variant={variant} type={type} {...others}>
                {iconLeft || ``}
                <span className="inner-text">{children}</span>
                {iconRight || ``}
            </Styled.Button>
        );
    }

    /**
     * If the link is to an external destination, or to a file,
     * render as a standard  'a' tag with appropriate props
     */
    if (!isPageLink(to)) {
        return (
            <Styled.Button as="a" href={to} size={size} variant={variant} type={type} {...others} rel="noopener noreferrer" target="_blank">
                {iconLeft || ``}
                <span className="inner-text">{children}</span>
                {iconRight || ``}
            </Styled.Button>
        );
    }

    return (
        <Styled.Button to={to} size={size} variant={variant} type={type} {...others}>
            {iconLeft || ``}
            <span className="inner-text">{children}</span>
            {iconRight || ``}
        </Styled.Button>
    );
};

const buttonSizes = [`s`, `m`, `l`];

const buttonTypes = [`standard`];

const buttonVariants = [`primary`, `secondary`, `tertiary`];

const buttonWidths = [`auto`, `full`];

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    type: PropTypes.oneOf(buttonTypes),
    variant: PropTypes.oneOf(buttonVariants),
    others: PropTypes.any,
    iconLeft: PropTypes.elementType,
    iconRight: PropTypes.elementType,
    size: PropTypes.oneOf(buttonSizes),
};

Button.defaultProps = {
    type: `standard`,
    variant: `primary`,
    size: `m`,
};

export default Button;
