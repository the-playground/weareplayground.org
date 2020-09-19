import { HeadingProps } from '@components/foundations';
import { AvailableBackgroundTheme } from '@themes/theme';

export interface TitleBlockProps extends HeadingProps {
    offset?: number;
    bgColor: AvailableBackgroundTheme;
}
