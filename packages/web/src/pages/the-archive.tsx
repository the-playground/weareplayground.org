import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext, PrismicImage } from '@nerve/shared/types';

import { SimpleHero } from '@nerve/shared/components';
import { ShowPosterGrid, ShowCoreWithPoster } from '@nerve/domains/show';

import { SubscribeSection } from '@nerve/domains/engagement';

import PageTemplate from '@nerve/domains/page/PageTemplate';

const ArchivePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const pageData = data.prismicArchivePage;
    const { nodes: shows } = data.allSanityShow;

    return (
        <PageTemplate pageConfig={pageData} currentLocation={location.pathname}>
            <SimpleHero
                title={pageData.data.hero_title}
                subTitle={pageData.data.hero_sub_title}
            />
            <ShowPosterGrid shows={shows} />
            <SubscribeSection />
        </PageTemplate>
    );
};

export const query = graphql`
    query {
        prismicArchivePage {
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
                    url(imgixParams: { q: 100 })
                    alt
                    dimensions {
                        width
                        height
                    }
                }

                # Hero
                hero_title
                hero_sub_title
            }
        }

        allSanityShow(sort: { order: DESC, fields: closeDate }) {
            nodes {
                title
                slug {
                    current
                }
                openDate
                closeDate
                posterImage {
                    alt
                    asset {
                        fluid {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                author {
                    name
                }
                season {
                    title
                    slug {
                        current
                    }
                }
            }
        }
    }
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

interface PageData {
    prismicArchivePage: {
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
            hero_sub_title: string;
        };
    };
    allSanityShow: {
        nodes: ShowCoreWithPoster[];
    };
}

export default ArchivePage;
