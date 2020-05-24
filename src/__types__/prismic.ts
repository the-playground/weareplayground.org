export interface PrismicData<T> {
    data: {
        prismic: T;
    };
}

export type PrismicSlice = {
    __typename: any;
    primary: any;
    fields: any;
};

export type PrismicImage = {
    alt?: string;
    url: string;
    dimensions: {
        width: string;
        height: string;
    };
};

export type PrismicLink = {
    url: string;
};
