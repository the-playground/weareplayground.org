import { SanityDocument } from '@nerve/shared/types';

export interface SeasonReference {
    slug: {
        current: string;
    };
    title: string;
}

export interface SeasonCore {
    title: string;
}

export interface SeasonPage extends SanityDocument {
    tagline: string;
    description: string;
}

export type SeasonPageContext = {
    id: string;
    slug: string;
    seasonURL: string;
};
