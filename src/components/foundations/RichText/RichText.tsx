import React from 'react';

import {
    Elements as PrismicElements,
    Date as PrismicDate,
    Link as PrismicLink,
    RichText as PrismicRichText,
    HTMLSerializer as PrismicHTMLSerializer,
    RichTextBlock as PrismicRichTextBlock,
} from 'prismic-reactjs';

import { getChildPageSlug, normalizeSlug } from '@lib/url';

import { Link } from '@components/utility';
import { BodyText } from '../BodyText/BodyText';
import { Heading } from '../Heading/Heading';
import { Image } from '../Image/Image';

/**
 * Handles resolving internal links
 *
 * @param doc
 */
const linkResolver = (doc: LinkResolverProps): string => {
    console.log(doc);

    switch (doc.type) {
        case 'home_page':
            return '/';

        default:
            return normalizeSlug(doc.uid);
    }
};

/**
 * Handle our own custom HTML serialization to allow for react component substitutions.
 *
 * * NOTE: We are keeping this as simple as possible to start and can always expand upon it!
 *
 * @param type The type of React Element
 * @param element The type of HTML Element
 * @param content Content fragments
 * @param children React children arrays
 * @param key The unique key to pass along to the generated component
 */
const customHTMLSerializer: PrismicHTMLSerializer<React.ReactNode> = (
    type,
    element,
    content,
    children,
    key
) => {
    switch (type) {
        case PrismicElements.heading2:
            return (
                <Heading size="s" tag="h2" key={key} color="medium">
                    {children}
                </Heading>
            );

        case PrismicElements.heading3:
            return (
                <Heading size="xs" tag="h3" key={key} color="medium">
                    {children}
                </Heading>
            );

        case PrismicElements.heading4:
            return (
                <BodyText
                    size="l"
                    tag="h4"
                    key={key}
                    color="accent"
                    weight="bold"
                >
                    {children}
                </BodyText>
            );

        case PrismicElements.heading5:
            return (
                <BodyText
                    size="m"
                    tag="h4"
                    key={key}
                    color="medium"
                    weight="bold"
                >
                    {children}
                </BodyText>
            );

        case PrismicElements.strong:
            return <strong key={key}>{children}</strong>;

        case PrismicElements.paragraph:
            return (
                <BodyText size="m" tag="p" key={key} color="light">
                    {children}
                </BodyText>
            );

        case PrismicElements.hyperlink:
            return (
                <Link
                    to={PrismicLink.url(element.data, linkResolver)}
                    className="content-link"
                    key={key}
                >
                    {children}
                </Link>
            );

        // Return null to stick with the default behavior for all other Elements
        default:
            return null;
    }
};

/**
 *
 * @param param0
 */
export const RichTextDisplay: React.FC<{
    content: PrismicCMSRichTextProps;
}> = ({ content }) => (
    <PrismicRichText
        render={content.raw}
        htmlSerializer={customHTMLSerializer}
    />
);

/**
 * These are te props that prismic returns to us when we query the
 * Prismic CMS Rich Text fields.
 *
 */
export interface PrismicCMSRichTextProps {
    html: any;
    text: string;
    raw: PrismicRichTextBlock[];
}

/**
 * Properties passed through to the link resolver for us to work with,
 *
 * From https://prismic.io/docs/javascript/beyond-the-api/link-resolving
 */
interface LinkResolverProps {
    id: string;
    uid: string;
    type: string;
    tags: string[];
    lang: string;
    isBroken: string;
}
