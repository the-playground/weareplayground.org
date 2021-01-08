import { FixedImageProps } from '@nerve/core/components';

export interface AuthorCardProps {
    name: string;
    brief: string;
    instagram?: string;
    website?: string;
    // TODO: This image pattern needs to find its way to our core image component typings once the Sanity migration is complete
    avatar: {
        alt: string;
        asset: FixedImageProps;
    };
}
