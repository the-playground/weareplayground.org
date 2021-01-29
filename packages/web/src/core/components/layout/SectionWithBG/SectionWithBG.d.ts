import { AvailableOverlayTheme } from '@nerve/core/themes';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';

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

export interface SectionWithBGProps extends BackgroundImage {
    overlay?: AvailableOverlayTheme;
    bgImage?: IFluidObject | IFluidObject[] | (IFluidObject | string)[];
    bgPosition?: BackgroundPosition;
    className?: string;
}
