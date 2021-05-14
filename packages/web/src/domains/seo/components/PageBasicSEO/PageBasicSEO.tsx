import React from 'react';
import { Helmet } from 'react-helmet';

import { SanityImageDataWithAlt } from '@nerve/shared/types';

/**
 * Handle generating the basic meta information for a page.
 *
 * @param url The URL of the current page
 * @param title The SEO title of the current page
 * @param description The SEO description of the current page
 * @param image The image object for the SEO image of the page
 * @param hideSEO Should this page be hidden fro search engines?
 *
 */
export const PageBasicSEO: React.FC<PageBasicSEOProps> = ({
    url,
    title,
    description,
    image,
    hideSEO,
}) => {
    const robots = hideSEO ? 'noindex, nofollow' : 'index, follow';

    return (
        <Helmet>
            {/* Standard meta data for search engines */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {image?.asset?.url && (
                <meta name="image" content={image.asset.url} />
            )}

            <link rel="canonical" href={url} />

            {/* Search engine visibility & directives */}
            <meta name="robots" content={robots} />
            <meta
                name="googlebot"
                content={`${robots}, max-snippet:-1, max-image-preview:large`}
            />
            <meta
                name="bingbot"
                content={`${robots}, max-snippet:-1, max-image-preview:large`}
            />

            {/* Opengraph meta tags for Facebook & LinkedIn */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={`${title}`} />
            <meta property="og:description" content={description} />

            {/* Meta images */}
            {image?.asset?.url && (
                <meta property="og:image" content={image.asset.url} />
            )}
            {image?.asset?.url && (
                <meta
                    property="og:image:secure_url"
                    content={image.asset.url}
                />
            )}

            {image?.alt && <meta property="og:image:alt" content={image.alt} />}

            {image?.asset?.metadata?.dimensions && (
                <meta
                    property="og:image:height"
                    content={`${image.asset.metadata.dimensions.height}`}
                />
            )}
            {image?.asset?.metadata?.dimensions && (
                <meta
                    property="og:image:width"
                    content={`${image.asset.metadata.dimensions.width}`}
                />
            )}
        </Helmet>
    );
};

interface PageBasicSEOProps {
    url: string;
    title: string;
    description: string;
    image?: SanityImageDataWithAlt;
    hideSEO?: boolean;
}
