import React from 'react';

import { ButtonProps } from './__types';
import * as styled from './__styles';

export const Button: React.FC<ButtonProps> = ({
    link,
    size,
    color,
    children,
    fullWidth,
    startIcon,
    endIcon,
    clickAnimation,
    className,
}) => {
    return (
        <styled.Button
            to={link ? link.to : ''}
            size={size}
            color={color}
            fullWidth={fullWidth}
            clickAnimation={clickAnimation}
            className={className}
        >
            {startIcon && <styled.StartIcon>{startIcon}</styled.StartIcon>}
            {children}
            {endIcon && <styled.EndIcon>{endIcon}</styled.EndIcon>}
        </styled.Button>
    );
};
