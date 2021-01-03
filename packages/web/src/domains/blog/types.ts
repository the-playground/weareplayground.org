import { FixedImageProps } from '@nerve/core/components';
import { PrismicExternalLink } from '@nerve/shared/types';

export interface BlogAuthor {
    name: string;
    bio: string;
    instagram: PrismicExternalLink;
    headshot: FixedImageProps;
}
