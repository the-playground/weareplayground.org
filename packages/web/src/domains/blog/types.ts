import { SanityDocument, SanityImageDataWithAlt } from '@web/shared/types';

export interface BlogAuthor {
    name: string;
    brief: string;
    instagram?: string;
    website?: string;
    avatar: SanityImageDataWithAlt;
}

export interface BlogPost extends SanityDocument {
    featuredImage: SanityImageDataWithAlt;
    _rawContent: any[];
    authors: BlogAuthor[];
}
