import React from 'react';

import { ButtonProps } from './__types';
import * as styled from './__styles';

export const Button: React.FC<ButtonProps> = ({
    link,
    size,
    color,
    children,
    width,
    className,
}) => {
    return (
        <styled.Button
            to={link ? link.to : ''}
            size={size}
            color={color}
            width={width ?? 'auto'}
            className={className}
        >
            {children}
        </styled.Button>
    );
};
