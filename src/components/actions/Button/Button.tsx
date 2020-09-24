import React from 'react';

import { ButtonProps } from './__types';
import * as styled from './__styles';

export const Button: React.FC<ButtonProps> = ({
    link,
    size,
    color,
    variant = 'fill',
    children,
    fullWidth,
    startIcon,
    endIcon,
    animateOnClick,
    animateIconOnHover,
    className,
}) => {
    return (
        <styled.Button
            to={link ? link.to : ''}
            variant={variant}
            size={size}
            color={color}
            fullWidth={fullWidth}
            animateOnClick={animateOnClick}
            animateIconOnHover={animateIconOnHover}
            className={className}
        >
            {startIcon && <div className="start-icon">{startIcon}</div>}
            {children}
            {endIcon && <div className="end-icon">{endIcon}</div>}
        </styled.Button>
    );
};
