import { IFluidObject } from 'gatsby-background-image';

export type PrismicImage = {
    alt?: string;
    url: string;
    dimensions?: {
        width: string;
        height: string;
    };
};

export type PrismicFluidImage = {
    alt?: string;
    fluid: IFluidObject;
    dimensions?: {
        width: string;
        height: string;
    };
};

export type PrismicExternalLink = {
    url: string;
};

export type PrismicInternalLink = {
    uid: string;
};

export type PrismicVariableLink = {
    uid?: string;
    url?: string;
};
