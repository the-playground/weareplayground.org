import { AvailableSurface } from '@web/ui/themes';

export interface PaperProps {
    bgColor?: AvailableSurface;
    variant?: 'default' | 'outlined';
    borderColor?: AvailableSurface;
    className?: string;
}
