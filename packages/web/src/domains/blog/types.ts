import {
    SanityDocument,
    SanityFluidImage,
    SanityFixedImage,
} from '@nerve/shared/types';

export interface BlogAuthor {
    name: string;
    brief: string;
    instagram?: string;
    website?: string;
    avatar: SanityFixedImage;
}

export interface BlogPost extends SanityDocument {
    featuredImage: SanityFluidImage;
    content: any;
    authors: BlogAuthor[];
}
