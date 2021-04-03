import { IconProps } from '@nerve/core/components/media';
import type { PolymorphicPropsWithRef } from 'react-polymorphic-types';
import { AvailableActionTheme } from '@nerve/core/themes';

export const ButtonDefaultElement = 'button';

export type ButtonSize = 's' | 'm';

export type CoreButtonProps = {
    size: ButtonSize;
    fullWidth?: true | undefined;
    animateOnClick?: true | undefined;
    animateIconOnHover?: true | undefined;
    startIcon?: React.ReactElement<IconProps>;
    endIcon?: React.ReactElement<IconProps>;
    isLoading?: boolean;
    color: AvailableActionTheme;
    variant: 'fill' | 'outline' | 'ghost' | 'text';
};

export type ButtonProps<
    T extends React.ElementType = typeof ButtonDefaultElement
> = PolymorphicPropsWithRef<CoreButtonProps, T>;
