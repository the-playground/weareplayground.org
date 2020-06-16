import { AvailableLogoType } from './__manifest__';

export type AvailableLogoSizes = {
    l: string;
    m: string;
    s: string;
    xs: string;
};

export type AvailableLogoSize = keyof AvailableLogoSizes;

export interface LogoProps {
    size: AvailableLogoSize;
    type: AvailableLogoType;
    color: 'standard' | 'inverted' | 'light' | 'dark';
}
