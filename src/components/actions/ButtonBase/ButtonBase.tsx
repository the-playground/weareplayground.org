import React from 'react';

import { ButtonBaseProps } from './__types';
import * as styled from './__styles';

export const ButtonBase: React.FC<ButtonBaseProps> = ({
    link,
    size,
    fullWidth,
    clickAnimation = false,
    children,
    className,
}) => {
    return (
        <styled.ButtonBase
            to={link ? link.to : ''}
            size={size}
            fullWidth={fullWidth}
            clickAnimation={clickAnimation}
            className={className}
        >
            {children}
        </styled.ButtonBase>
    );
};

export * from './__types';
export * from './__styles';
