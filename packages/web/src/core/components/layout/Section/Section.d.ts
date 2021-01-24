import { AvailableSurface, AvailableOverlayTheme } from '@nerve/core/themes';
import { SanityFluidImage } from '@nerve/shared/types';

type BackgroundPosition =
    | 'center top'
    | 'center center'
    | 'center bottom'
    | 'left top'
    | 'left center'
    | 'left bottom'
    | 'right top'
    | 'right center'
    | 'right bottom';

export interface SectionProps {
    bgColor?: AvailableSurface;
    overlay?: AvailableOverlayTheme;
    bgImage?: SanityFluidImage;
    bgPosition?: BackgroundPosition;
    className?: string;
}
