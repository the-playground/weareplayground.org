import React from 'react';

import { ButtonProps } from './__types';
import * as styled from './__styles';

export const Button: React.FC<ButtonProps> = ({
    link,
    size,
    variant,
    children,
    width,
}) => {
    return (
        <styled.Button
            to={link.to}
            size={size}
            variant={variant}
            width={width ?? 'auto'}
        >
            {children}
        </styled.Button>
    );
};
