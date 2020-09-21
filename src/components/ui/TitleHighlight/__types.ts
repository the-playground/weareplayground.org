import { HeadingProps } from '@components/foundations';
import { AvailableBackgroundTheme } from '@themes/theme';

export interface TitleHighlightProps extends HeadingProps {
    offset?: number;
    bgColor: AvailableBackgroundTheme;
}
