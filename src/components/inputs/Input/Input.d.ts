import React, { InputHTMLAttributes } from 'react';

import { AvailableInputTheme } from '@themes/theme';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    color: AvailableInputTheme;
}
