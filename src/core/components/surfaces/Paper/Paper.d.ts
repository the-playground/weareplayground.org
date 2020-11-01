import { AvailableSurfaceTheme } from '@nerve/core/themes';

export interface PaperProps {
    variant?: 'default' | 'outlined';
    bgColor: AvailableSurfaceTheme;
    borderColor?: AvailableSurfaceTheme;
    className: string;
}
