import { AvailableSurface, AvailableOverlayTheme } from '@web/core/themes';
import { BackgroundImageProps } from '@web/core/components';

export interface SectionProps {
    bgColor?: AvailableSurface;
    overlay?: AvailableOverlayTheme;
    bgImage?: BackgroundImageProps;
    className?: string;
}
