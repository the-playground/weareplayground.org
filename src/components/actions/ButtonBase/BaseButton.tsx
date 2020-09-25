import React from 'react';

import { ButtonBaseProps } from './__types';
import * as styled from './__styles';

export const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
    const { children, startIcon, endIcon, ...others } = props;

    return (
        <styled.ButtonBase {...others}>
            {startIcon && <div className="start-icon">{startIcon}</div>}
            {children}
            {endIcon && <div className="end-icon">{endIcon}</div>}
        </styled.ButtonBase>
    );
};

export * from './__types';
// export * from './__styles';
