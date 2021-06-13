import { AvailableBodyTypography } from '@nerve/core/tokens';
import { AvailableTypographyTheme } from '@nerve/core/themes';

export type AllowedTag =
    | 'span'
    | 'p'
    | 'h2'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'ul'
    | 'ol'
    | 'figcaption';

export interface BodyTextProps {
    size: AvailableBodyTypography;
    color: AvailableTypographyTheme;
    weight?: 'regular' | 'bold';
    className?: string;
    as?: AllowedTag;
}
