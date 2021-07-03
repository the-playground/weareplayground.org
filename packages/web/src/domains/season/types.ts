import { GatsbyPageContext, SanityDocument } from '@web/shared/types';

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

export interface SeasonPageContext extends GatsbyPageContext {
    seasonURL: string;
}
