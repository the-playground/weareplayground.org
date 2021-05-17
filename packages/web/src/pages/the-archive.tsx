import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext, SanityDocumentSEO } from '@nerve/shared/types';

import { SimpleHero } from '@nerve/shared/components';
import { ShowPosterGrid, ShowCoreWithPoster } from '@nerve/domains/show';

// import { SubscribeSection } from '@nerve/domains/engagement';

import PageTemplate from '@nerve/domains/page/PageTemplate';

const ArchivePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanityArchivePage: page } = data;
    const { nodes: shows } = data.allSanityShow;

    return (
        <PageTemplate
            seo={page.seo}
            lastUpdated={page._updatedAt}
            currentLocation={location.pathname}
        >
            <SimpleHero title={page.hero.title} subTitle={page.hero.subtitle} />
            <ShowPosterGrid shows={shows} />
            {/* <SubscribeSection /> */}
        </PageTemplate>
    );
};

export const query = graphql`
    query {
        sanityArchivePage {
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

            hero {
                title
                copy
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
                        _id
                        gatsbyImageData(
                            width: 500
                            placeholder: DOMINANT_COLOR
                            layout: FULL_WIDTH
                        )
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
    sanityArchivePage: {
        _updatedAt: string;
        seo: SanityDocumentSEO;
        hero: {
            title: string;
            subtitle: string;
        };
    };
    allSanityShow: {
        nodes: ShowCoreWithPoster[];
    };
}

export default ArchivePage;
