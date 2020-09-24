import React from 'react';
import { IconProps } from '@components/foundations';
import { AvailableActionTheme } from '@themes/theme.d';
import { ButtonBaseProps } from '../ButtonBase/ButtonBase';

export type ButtonSize = 's' | 'm';

export interface ButtonProps extends ButtonBaseProps {
    color: AvailableActionTheme;
    variant?: 'fill' | 'text' | 'outlined';
    startIcon?: React.ReactElement<IconProps>;
    endIcon?: React.ReactElement<IconProps>;
}
