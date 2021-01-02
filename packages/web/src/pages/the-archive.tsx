import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext, PrismicImage } from '@nerve/shared/types';

import { SimpleHero } from '@nerve/shared/components';
import { ShowPosterGrid, sortShows } from '@nerve/domains/performance';
import { ShowSnippet } from '@nerve/domains/performance/types';
import { SubscribeSection } from '@nerve/domains/engagement';

import PageTemplate from '@nerve/domains/page/PageTemplate';

const ArchivePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { uid } = pageContext;
    const pageData = data.prismicArchivePage;
    const shows = data.allPrismicShow.nodes;

    return (
        <PageTemplate pageConfig={pageData} currentLocation={location.pathname}>
            <SimpleHero
                title={pageData.data.hero_title}
                subTitle={pageData.data.hero_sub_title}
            />
            <ShowPosterGrid items={sortShows(shows)} />
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

        allPrismicShow {
            nodes {
                uid
                data {
                    performances {
                        datetime
                        external_ticket_link {
                            url
                        }
                    }
                    poster_image {
                        fluid {
                            ...GatsbyPrismicImageFluid
                        }
                    }
                    title
                    author
                    # Query related season info
                    season {
                        uid
                        document {
                            ... on PrismicSeason {
                                data {
                                    title
                                }
                            }
                        }
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
    allPrismicShow: {
        nodes: Omit<ShowSnippet, 'card_image'>[];
    };
}

export default ArchivePage;
