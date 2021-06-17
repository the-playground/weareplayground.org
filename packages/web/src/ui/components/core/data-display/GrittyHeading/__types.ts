import { AvailableSurface } from '@web/ui/themes';
import { HeadingProps } from '../Heading/Heading';

export interface GrittyHeadingProps extends HeadingProps {
    offset?: number;
    bgColor: AvailableSurface;
}
