import { AvailableIcon, AvailableIconName } from './__manifest__';

export interface IconProps {
    name: AvailableIconName;
    color?: any;
    size: keyof AvailableIcon;
    selectedSize: string;
}
