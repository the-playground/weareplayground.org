import { AvailableIconSize, AvailableBreakpoint } from '@tokens';
import { AvailableIconTheme } from '@themes/theme.d';
import { AvailableIconName } from './__manifest__';

export interface IconProps {
    name: AvailableIconName;
    color?: AvailableIconTheme;
    size: AvailableIconSize;
    responsive?: {
        size: AvailableIconSize;
        breakpoint: AvailableBreakpoint;
    };
    title?: string;
    desc?: string;
}
