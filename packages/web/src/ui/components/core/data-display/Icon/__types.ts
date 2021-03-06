import { AvailableIconSize, AvailableBreakpoint } from '@web/ui/tokens';
import { AvailableIconTheme } from '@web/ui/themes';
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

export type { AvailableIconName } from './__manifest__';
