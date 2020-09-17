import { AvailableHeadingTypography } from '@tokens';
import { AvailableTypographyPalette } from '@themes/theme.d';

export type AllowedTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface HeadingProps {
    tag: AllowedTag;
    as: AllowedTag;
    size: AvailableHeadingTypography;
    color: AvailableTypographyPalette;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
    className?: string;
}
