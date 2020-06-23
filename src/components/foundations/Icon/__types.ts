import { AvailableIconSize } from '@tokens';
import { AvailableIconName } from './__manifest__';

export interface IconProps {
    name: AvailableIconName;
    color?: 'light' | 'dark' | 'medium' | 'accentA';
    size: AvailableIconSize;
    title?: string;
    desc?: string;
}
