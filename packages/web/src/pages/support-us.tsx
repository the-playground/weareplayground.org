import React from 'react';
import { graphql, PageProps } from 'gatsby';
import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
} from '@nerve/shared/types';

import { NewsSubscribeCTA } from '@nerve/domains/engagement';

import PageTemplate from '@nerve/domains/page/PageTemplate';

const HomePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    // const { sanitySupportUsPage: page } = data;

    return (
        // <PageTemplate
        //     seo={page.seo}
        //     lastUpdated={page._updatedAt}
        //     currentLocation={location.pathname}
        // >
        <NewsSubscribeCTA />
        // </PageTemplate>
    );
};

// export const query = graphql`
//     query {
//         sanitySupportUsPage {
//             title
//             slug {
//                 current
//             }
//             _updatedAt
//             seo {
//                 title
//                 description
//                 hide
//                 publishedAt
//                 image {
//                     alt
//                     asset {
//                         url
//                     }
//                 }
//             }
//         }
//     }
// `;

interface PageData {
    sanitySupportUsPage: SupportUsPageData;
}

interface SupportUsPageData extends SanityDocument {
    test?: string;
}

export default HomePage;
