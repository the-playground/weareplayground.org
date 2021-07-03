import { AvailableSurface, AvailableOverlayTheme } from '@web/ui/themes';
import { BackgroundImageProps } from '@web/ui/core';

export interface SectionProps {
    bgColor?: AvailableSurface;
    overlay?: AvailableOverlayTheme;
    bgImage?: BackgroundImageProps;
    className?: string;
}
