import { SanityImageDataWithAlt } from '@nerve/shared/types';

export interface AuthorCardProps {
    name: string;
    brief: string;
    instagram?: string;
    website?: string;
    avatar: SanityImageDataWithAlt;
}
