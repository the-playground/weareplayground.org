import { AvailableSurface, AvailableOverlayTheme } from '@nerve/core/themes';
import { BackgroundImageProps } from '@nerve/core/components';

export interface SectionProps {
    bgColor?: AvailableSurface;
    overlay?: AvailableOverlayTheme;
    bgImage?: BackgroundImageProps;
    className?: string;
}
