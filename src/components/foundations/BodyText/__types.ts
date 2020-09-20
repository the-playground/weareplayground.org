import { AvailableBodyTypography } from '@tokens';
import { AvailableTypographyPalette } from '@themes/theme.d';

export type AllowedTag = 'span' | 'p' | 'h2' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface BodyTextBaseProps {
    size: AvailableBodyTypography;
    color: AvailableTypographyPalette;
    weight?: 'regular' | 'bold';
    className?: string;
}

export interface BodyTextProps extends BodyTextBaseProps {
    tag: AllowedTag;
}

export interface BodyTextStyledProps extends BodyTextBaseProps {
    as: AllowedTag;
}
