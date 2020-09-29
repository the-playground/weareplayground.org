import React from 'react';
import classnames from 'classnames';
import { ButtonBaseProps } from './ButtonBase.d';
import * as styled from './ButtonBase.styles';

export const ButtonBase: React.FC<ButtonBaseProps> = (props) => {
    const {
        children,
        className,
        fullWidth,
        animateOnClick,
        animateIconOnHover,
        startIcon,
        endIcon,
        isLoading,
        ...others
    } = props;

    const classes = classnames(
        {
            '--full': fullWidth,
            '--animate-click': animateOnClick,
            '--icon-hover': animateIconOnHover,
            '--loading': isLoading,
        },
        className
    );

    return (
        <styled.ButtonBase className={classes} {...others}>
            {isLoading && <div className="loader">loading</div>}
            {startIcon && <div className="start-icon">{startIcon}</div>}
            {children}
            {endIcon && <div className="end-icon">{endIcon}</div>}
        </styled.ButtonBase>
    );
};

export * from './ButtonBase.d';
