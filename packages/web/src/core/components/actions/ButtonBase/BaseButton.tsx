import React, { Ref } from 'react';
import classnames from 'classnames';

import { CircularProgress } from '@nerve/core/components/progress';

import { ButtonBaseProps } from './ButtonBase.d';
import * as styled from './ButtonBase.styles';

// Using: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase#generic-components

// <C extends React.ElementType = 'button'>
// ButtonBaseProps<C>

export const ButtonBase = React.forwardRef(
    <C extends React.ElementType = 'button'>(
        props: ButtonBaseProps<C>,
        ref: Ref<C>
    ) => {
        const {
            children,
            className,
            size,
            fullWidth,
            animateOnClick,
            animateIconOnHover,
            startIcon,
            endIcon,
            isLoading,
            component,
            ...rest
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

        const loaderIconSize = size === 'm' ? 's' : 'xs';

        return (
            <styled.ButtonBase
                className={classes}
                size={size}
                ref={ref}
                as={component}
                {...rest}
            >
                {isLoading ? (
                    <div className="loader">
                        <CircularProgress size={loaderIconSize} />
                    </div>
                ) : (
                    <>
                        {startIcon && (
                            <div className="start-icon">{startIcon}</div>
                        )}
                        {children}
                        {endIcon && <div className="end-icon">{endIcon}</div>}
                    </>
                )}
            </styled.ButtonBase>
        );
    }
);

export * from './ButtonBase.d';
