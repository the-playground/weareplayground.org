import { AvailableLogoTheme } from '@nerve/core/themes';
import { AvailableBreakpoint } from '@nerve/core/tokens';
import { AvailableLogoType } from './__manifest__';

export type AvailableLogoSizes = {
    xxl: string;
    xl: string;
    l: string;
    m: string;
    s: string;
    xs: string;
};

export type AvailableLogoSize = keyof AvailableLogoSizes;

export interface LogoProps {
    size: AvailableLogoSize;
    responsive?: {
        breakpoint: AvailableBreakpoint;
        size: AvailableLogoSize;
    };
    type: AvailableLogoType;
    color?: AvailableLogoTheme;
}
