import { AvailableSurface } from '@web/core/themes';

export interface PaperProps {
    bgColor?: AvailableSurface;
    variant?: 'default' | 'outlined';
    borderColor?: AvailableSurface;
    className?: string;
}
