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

/**
 * Definitions for Rich text using Prismic ReactJS. Types not exported from package
 * so we have to manually define them :/
 */
export enum PrismicRichTextElements {
    heading1 = 'heading1',
    heading2 = 'heading2',
    heading3 = 'heading3',
    heading4 = 'heading4',
    heading5 = 'heading5',
    heading6 = 'heading6',
    paragraph = 'paragraph',
    preformatted = 'preformatted',
    strong = 'strong',
    em = 'em',
    listItem = 'list-item',
    oListItem = 'o-list-item',
    list = 'group-list-item',
    oList = 'group-o-list-item',
    image = 'image',
    embed = 'embed',
    hyperlink = 'hyperlink',
    label = 'label',
    span = 'span',
}

export type PrismicRichTextSpan = {
    start: number;
    end: number;
    type: 'strong' | 'hyperlink';
    data?: {
        link_type: string;
        url: string;
        target?: string;
    };
};

export type PrismicRichTextBlock = {
    type: PrismicRichTextElements;
    text: string;
    spans: PrismicRichTextSpan[];
};

export type PrismicRichText = {
    html: any;
    text: string;
    raw: PrismicRichTextBlock;
};

export type PrismicHTMLSerializer<T> = (
    type: React.ElementType,
    element: any,
    content: string,
    children: T[],
    key: string
) => T | null;
