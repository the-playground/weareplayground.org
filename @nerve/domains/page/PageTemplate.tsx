import React from 'react';

import { PrismicImage } from '@type/prismic';

import { useConfigContext } from '@nerve/shared/context';
import { useCurrentURL, useGetMetaImage } from '@nerve/shared/hooks';

import { PageBasicSEO, StructuredData } from '@nerve/domains/seo';

/**
 * This template handles retrieving and generating all dynamic content for
 * each "Page" that exists in our CMS.
 */
const PageTemplate: React.FC<PageTemplateProps> = ({
    pageConfig,
    currentLocation,
    children,
}) => {
    const siteConfig = useConfigContext();
    const url = useCurrentURL(currentLocation);
    const { data } = pageConfig;
    const metaImage = useGetMetaImage('page', pageConfig.data.seo_image);

    return (
        <>
            <PageBasicSEO
                url={url}
                title={data.seo_title}
                description={data.seo_description}
                image={metaImage}
                hideSEO={data.seo_hide}
            />
            {/* Do not output structured data if this page will be hidden from SEO */}
            {data.seo_hide ? null : (
                <StructuredData
                    siteConfig={siteConfig}
                    pageSchemaData={{
                        pageURL: url,
                        title: data.seo_title,
                        description: data.seo_description,
                        image: metaImage,
                        datePublished: pageConfig.first_publication_date,
                        dateModified: pageConfig.last_publication_date,
                    }}
                />
            )}
            {children}
        </>
    );
};

interface PageTemplateProps {
    pageConfig: {
        first_publication_date: string;
        last_publication_date: string;
        data: {
            remove_header: boolean;
            remove_footer: boolean;
            seo_title: string;
            seo_description: string;
            seo_image?: PrismicImage;
            seo_hide: boolean;
            [key: string]: any; // We only want to focus on our core metadata here, so we don't care about other props that exist on "data".
        };
    };
    currentLocation: string;
}

export default PageTemplate;
