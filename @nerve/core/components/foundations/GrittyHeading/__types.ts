import { HeadingProps } from '@nerve/core/components/foundations';
import { AvailableBackgroundTheme } from '@nerve/core/themes';

export interface GrittyHeadingProps extends HeadingProps {
    offset?: number;
    bgColor: AvailableBackgroundTheme;
}
