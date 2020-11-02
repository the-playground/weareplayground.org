import BrandMark from './defs/BrandMark';
import Lockup from './defs/Lockup';
import Playground from './defs/Playground';

export const availableLogos = {
    BrandMark,
    Lockup,
    Playground,
};

export type AvailableLogos = typeof availableLogos;
export type AvailableLogoType = keyof AvailableLogos;
