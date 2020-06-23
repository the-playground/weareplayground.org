import { AvailableBodyTypography } from '@tokens';

export type AllowedTag = 'span' | 'p' | 'h2' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface BodyTextProps {
    tag: AllowedTag;
    as: AllowedTag;
    size: AvailableBodyTypography;
    color: 'light' | 'medium' | 'dark' | 'accent';
    weight?: 'regular' | 'bold';
    className?: string;
}
