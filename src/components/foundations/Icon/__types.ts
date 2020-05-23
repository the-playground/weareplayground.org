import { ReactElement } from 'react';
import { AvailableIconName } from './__manifest__';

export interface RawIconDefinition {
    viewBox: string;
    path: ReactElement;
}

export interface AvailableIconSizes {
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
}

export type AvailableIconColor = 'light' | 'medium' | 'dark';

export interface IconProps {
    name: AvailableIconName;
    size?: keyof AvailableIconSizes;
    gradient?: {
        start: string;
        end: string;
    };
    color?: AvailableIconColor;
}
