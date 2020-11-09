import { FixedImageProps } from '@nerve/core/components';
import { PrismicExternalLink } from '@nerve/shared/types';

export interface Author {
    name: string;
    bio: string;
    instagram: PrismicExternalLink;
    headshot: FixedImageProps;
}
