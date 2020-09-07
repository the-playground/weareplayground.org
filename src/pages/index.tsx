import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyPageContext } from '@type/gatsby';
import { PrismicImage } from '@type/prismic';

import PageTemplate from '@templates/PageTemplate';
import { FluidImageProps } from '@components/foundations';
import { SubscribeBar } from '@components/ui';

const HomePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { uid } = pageContext;
    const pageData = data.prismicHomePage;

    return (
        <PageTemplate
            slug={uid}
            pageConfig={pageData}
            currentLocation={location.pathname}
        >
            <SubscribeBar />
        </PageTemplate>
    );
};

export const query = graphql`
    query {
        prismicHomePage {
            last_publication_date
            first_publication_date
            data {
                # Config & SEO
                remove_footer
                remove_header
                seo_description
                seo_hide
                seo_title
                seo_image {
                    alt
                    url
                    dimensions {
                        height
                        width
                    }
                }

                # Hero
                hero_title
                hero_copy
                hero_image {
                    fluid {
                        ...GatsbyPrismicImageFluid
                    }
                }

                # Intro
            }
        }
    }
`;

interface PageData {
    prismicHomePage: {
        first_publication_date: string;
        last_publication_date: string;
        data: {
            // Config & SEO
            remove_header: boolean;
            remove_footer: boolean;
            seo_title: string;
            seo_description: string;
            seo_image?: PrismicImage;
            seo_hide: boolean;

            // Hero
            hero_title: string;
            hero_copy: string;
            hero_image: FluidImageProps;
        };
    };
}

export default HomePage;
