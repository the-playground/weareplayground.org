import React from 'react';
import classnames from 'classnames';
import { ButtonBaseProps } from './__types';
import * as styled from './__styles';

export const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
    const {
        children,
        className,
        fullWidth,
        animateOnClick,
        animateIconOnHover,
        startIcon,
        endIcon,
        ...others
    } = props;

    const classes = classnames(
        {
            '--full': fullWidth,
            '--animate-click': animateOnClick,
            '--icon-hover': animateIconOnHover,
        },
        className
    );

    return (
        <styled.ButtonBase className={classes} {...others}>
            {startIcon && <div className="start-icon">{startIcon}</div>}
            {children}
            {endIcon && <div className="end-icon">{endIcon}</div>}
        </styled.ButtonBase>
    );
};

export * from './__types';
// export * from './__styles';
