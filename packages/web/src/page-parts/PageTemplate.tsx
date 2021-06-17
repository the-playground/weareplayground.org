import React from 'react';

import { SanityDocumentSEO } from '@web/shared/types';

import { useCurrentURL, useGetMetaImage } from '@web/shared/hooks';

import { PageBasicSEO, StructuredData } from '@web/domains/app';

/**
 * This template handles retrieving and generating all dynamic content for
 * each "Page" that exists in our CMS.
 */
const PageTemplate: React.FC<PageTemplateProps> = ({
    seo,
    currentLocation,
    lastUpdated,
    children,
}) => {
    const url = useCurrentURL(currentLocation);
    const metaImage = useGetMetaImage('page', seo.image);

    return (
        <>
            <PageBasicSEO
                url={url}
                title={seo.title}
                description={seo.description}
                image={metaImage}
                hideSEO={seo.hide}
            />
            {/* Do not output structured data if this page will be hidden from SEO */}
            {seo.hide ? null : (
                <StructuredData
                    pageSchemaData={{
                        pageURL: url,
                        title: seo.title,
                        description: seo.description,
                        image: metaImage,
                        datePublished: seo.publishedAt,
                        dateModified: lastUpdated,
                    }}
                />
            )}
            {children}
        </>
    );
};

interface PageTemplateProps {
    seo: SanityDocumentSEO;
    lastUpdated: string;
    currentLocation: string;
}

export default PageTemplate;
