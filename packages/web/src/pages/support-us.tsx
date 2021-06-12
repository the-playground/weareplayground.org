import React from 'react';
import { graphql, PageProps } from 'gatsby';
import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
} from '@nerve/shared/types';

import PageTemplate from '@nerve/domains/page/PageTemplate';

import { SimpleHero } from '@nerve/shared/components';
import { NewsSubscribeCTA } from '@nerve/domains/engagement';

import {
    WaysOfGivingSection,
    DonateSection,
    AlternateGivingSection,
    TaxExemptSection,
} from '@nerve/domains/page/support-us';

const HomePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanitySupportUsPage: page } = data;

    return (
        <PageTemplate
            seo={page.seo}
            lastUpdated={page._updatedAt}
            currentLocation={location.pathname}
        >
            <SimpleHero
                title="Be Awesome"
                subTitle="Support the future of theatre in Dayton"
            />
            <TaxExemptSection />
            <NewsSubscribeCTA />
        </PageTemplate>
    );
};

export const query = graphql`
    query {
        sanitySupportUsPage {
            title
            slug {
                current
            }
            _updatedAt
            seo {
                title
                description
                hide
                publishedAt
                image {
                    alt
                    asset {
                        url
                    }
                }
            }
        }
    }
`;

interface PageData {
    sanitySupportUsPage: SupportUsPageData;
}

interface SupportUsPageData extends SanityDocument {
    test?: string;
}

export default HomePage;
