import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext } from '@type/gatsby';
import { PrismicImage } from '@type/prismic';
import { ShowSnippet } from '@type/show';

// Import Typescript interfaces
import PageTemplate from '@templates/PageTemplate';
import { SimpleHero, PosterGrid } from '@components/ui';

const ArchivePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { uid } = pageContext;
    const pageData = data.prismicArchivePage;
    const shows = data.allPrismicShow.nodes;

    return (
        <PageTemplate
            slug={uid}
            pageConfig={pageData}
            currentLocation={location.pathname}
        >
            <SimpleHero
                title={pageData.data.hero_title}
                subTitle={pageData.data.hero_sub_title}
            />
            <PosterGrid items={shows} />
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
                    alt
                    url
                    dimensions {
                        height
                        width
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
