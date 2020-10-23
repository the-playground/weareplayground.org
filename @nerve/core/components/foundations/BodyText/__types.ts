import { AvailableBodyTypography } from '@nerve/core/tokens';
import { AvailableTypographyPalette } from '@nerve/core/themes';

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
