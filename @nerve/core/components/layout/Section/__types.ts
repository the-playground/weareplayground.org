import { AvailableBackgroundTheme, AvailableOverlayTheme } from '@nerve/core/themes';
import { PrismicFluidImage } from '@type/prismic';

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
    bgColor?: AvailableBackgroundTheme;
    overlay?: AvailableOverlayTheme;
    bgImage?: PrismicFluidImage;
    bgPosition?: BackgroundPosition;
    className?: string;
}
