import { SanityFixedImage } from '@nerve/core/components';

export interface AuthorCardProps {
    name: string;
    brief: string;
    instagram?: string;
    website?: string;
    avatar: SanityFixedImage;
}
