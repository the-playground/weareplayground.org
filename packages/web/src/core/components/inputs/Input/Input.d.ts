import React, { InputHTMLAttributes } from 'react';

import { AvailableInputTheme } from '@web/core/themes';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    color: AvailableInputTheme;
}
