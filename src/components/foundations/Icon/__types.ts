import { AvailableIconSize } from '@tokens';
import { AvailableIconTheme } from '@themes/theme.d';
import { AvailableIconName } from './__manifest__';

export interface IconProps {
    name: AvailableIconName;
    color?: AvailableIconTheme;
    size: AvailableIconSize;
    title?: string;
    desc?: string;
}
