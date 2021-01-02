export interface SeasonReference {
    slug: {
        current: string;
    };
    title: string;
}

export interface Season extends SanityDocument {
    tagline: string;
    description: string;
}
