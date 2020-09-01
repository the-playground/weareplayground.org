import { LinkProps } from '@components/utility';
import { AvailableActionTheme } from '@themes/theme.d';

export type ButtonSize = 's' | 'm';

export interface ButtonProps {
    link?: LinkProps;
    size: ButtonSize;
    color: AvailableActionTheme;
    width?: 'auto' | 'full';
    className?: string;
}
