import { AvailableHeadingTypography } from '@nerve/core/tokens';
import { AvailableTypographyTheme } from '@nerve/core/themes';

export type AllowedTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface HeadingProps {
    as?: AllowedTag;
    size: AvailableHeadingTypography;
    color: AvailableTypographyTheme;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
    className?: string;
}
