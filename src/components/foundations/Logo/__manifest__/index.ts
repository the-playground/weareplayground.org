import BrandMark from './defs/BrandMark';
import Lockup from './defs/Lockup';

export const availableLogos = {
    BrandMark,
    Lockup,
};

export type AvailableLogos = typeof availableLogos;
export type AvailableLogoType = keyof AvailableLogos;
