import { AvailableIconSize, AvailableBreakpoint } from '@nerve/core/tokens';
import { AvailableIconTheme } from '@nerve/core/themes';
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
