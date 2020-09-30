import { AvailableHeadingTypography } from '@tokens';
import { AvailableTypographyPalette } from '@themes/theme.d';

export type AllowedTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface HeadingBaseProps {
    size: AvailableHeadingTypography;
    color: AvailableTypographyPalette;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
    className?: string;
}

export interface HeadingProps extends HeadingBaseProps {
    tag: AllowedTag;
}

export interface HeadingStyledProps extends HeadingBaseProps {
    as: AllowedTag;
}
