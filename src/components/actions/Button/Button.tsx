import React from 'react';

import { ButtonProps } from './__types';
import * as styled from './__styles';

export const Button: React.FC<ButtonProps> = ({
    link,
    size,
    color,
    variant,
    children,
    fullWidth,
    startIcon,
    endIcon,
    animateClick,
    className,
}) => {
    return (
        <styled.Button
            to={link ? link.to : ''}
            variant={variant ?? 'fill'}
            size={size}
            color={color}
            fullWidth={fullWidth}
            animateClick={animateClick}
            className={className}
        >
            {startIcon && <styled.StartIcon>{startIcon}</styled.StartIcon>}
            {children}
            {endIcon && <styled.EndIcon>{endIcon}</styled.EndIcon>}
        </styled.Button>
    );
};
