import React from 'react';

import { PrismicImage } from '@type/prismic';

import { useConfigContext } from '@context';
import { useCurrentURL, useGetMetaImage } from '@hooks';

import { Layout } from '@components/layout';

/**
 * This template handles retrieving and generating all dynamic content for
 * each "Page" that exists in our CMS.
 */
const PageTemplate: React.FC<PageTemplateProps> = ({
    pageConfig,
    slug,
    currentLocation,
    children,
}) => {
    const siteConfig = useConfigContext();
    const url = useCurrentURL(currentLocation);
    const metaImage = useGetMetaImage('page', pageConfig.seo_image);

    return (
        <Layout
            noHeader={pageConfig.remove_header}
            noFooter={pageConfig.remove_footer}
        >
            {children}
        </Layout>
    );
};

interface PageTemplateProps {
    pageConfig: {
        _meta: {
            firstPublicationDate: string;
            lastPublicationDate: string;
        };
        remove_header: boolean;
        remove_footer: boolean;
        seo_title: string;
        seo_description: string;
        seo_image?: PrismicImage;
        seo_hide: boolean;
        [key: string]: any; // We only want to focus on our core metadata here, so we don't care about other props that exist on "data".
    };
    slug: string;
    currentLocation: string;
}

export default PageTemplate;
