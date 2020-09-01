import { AvailableBodyTypography } from '@tokens';
import { AvailableTypographyPalette } from '@themes/theme.d';

export type AllowedTag = 'span' | 'p' | 'h2' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface BodyTextProps {
    tag: AllowedTag;
    as: AllowedTag;
    size: AvailableBodyTypography;
    color: AvailableTypographyPalette;
    weight?: 'regular' | 'bold';
    className?: string;
}
