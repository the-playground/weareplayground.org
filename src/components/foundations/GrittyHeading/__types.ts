import { HeadingProps } from '@components/foundations';
import { AvailableBackgroundTheme } from '@themes/theme';

export interface GrittyHeadingProps extends HeadingProps {
    offset?: number;
    bgColor: AvailableBackgroundTheme;
}
