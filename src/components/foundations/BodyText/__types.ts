import { AvailableBodyTypography } from '@tokens';
import { AvailableTypographyTheme } from '@type/theme';

export type AllowedTag = 'span' | 'p';

export interface BodyTextProps {
    tag: AllowedTag;
    as: AllowedTag;
    size: AvailableBodyTypography;
    color: AvailableTypographyTheme;
}
