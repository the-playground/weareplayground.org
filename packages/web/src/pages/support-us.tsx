import React from 'react';
import { graphql, PageProps } from 'gatsby';
import {
    GatsbyPageContext,
    SanityDocument,
    SanityImageData,
} from '@web/shared/types';

import PageTemplate from '@web/page-parts/PageTemplate';

import { SimpleHero, NewsSubscribeCTA } from '@web/ui/molecules';

import {
    WaysOfGivingSection,
    DonateSection,
    AlternateGivingSection,
    TaxExemptSection,
} from '@web/page-parts/support-us';

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
            <AlternateGivingSection />
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
