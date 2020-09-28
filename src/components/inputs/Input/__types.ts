import { InputHTMLAttributes } from 'react';
import { AvailableInputTheme } from '@themes/theme';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    ref?: any;
    color: AvailableInputTheme;
}
