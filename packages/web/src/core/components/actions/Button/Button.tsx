import React from 'react';
import classnames from 'classnames';
import { CircularProgress } from '@nerve/core/components/progress';

import type {
    PolymorphicForwardRefExoticComponent,
    PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';

import { ButtonDefaultElement, CoreButtonProps } from './Button.d';

import * as styles from './Button.styles';

export const Button: PolymorphicForwardRefExoticComponent<
    CoreButtonProps,
    typeof ButtonDefaultElement
> = React.forwardRef(function ButtonBase<
    T extends React.ElementType = typeof ButtonDefaultElement
>(
    {
        children,
        className,
        size,
        variant,
        color,
        fullWidth,
        animateOnClick,
        animateIconOnHover,
        startIcon,
        endIcon,
        isLoading,
        as,
        ...rest
    }: PolymorphicPropsWithoutRef<CoreButtonProps, T>,
    ref: React.ForwardedRef<Element>
) {
    const classes = classnames(
        styles.root,
        styles.sizes[size],
        styles.getButtonStyles(variant, color),
        {
            '--full': fullWidth,
            '--animate-click': animateOnClick,
            '--icon-hover': animateIconOnHover,
            '--loading': isLoading,
        },
        className
    );

    const loaderIconSize = size === 'm' ? 's' : 'xs';

    const Element: React.ElementType = as || ButtonDefaultElement;

    return (
        <Element className={classes} ref={ref} {...rest}>
            {isLoading ? (
                <div className="loader">
                    <CircularProgress size={loaderIconSize} />
                </div>
            ) : (
                <>
                    {startIcon && <div className="start-icon">{startIcon}</div>}
                    {children}
                    {endIcon && <div className="end-icon">{endIcon}</div>}
                </>
            )}
        </Element>
    );
});
