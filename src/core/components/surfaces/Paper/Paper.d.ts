import { AvailableSurface } from '@nerve/core/themes';

export interface PaperProps {
    bgColor?: AvailableSurface;
    variant?: 'default' | 'outlined';
    borderColor?: AvailableSurface;
    className?: string;
}
