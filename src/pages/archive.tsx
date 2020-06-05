import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext } from '@type/gatsby';
import { PrismicImage } from '@type/prismic';
import { ShowSnippet } from '@type/show';

// Import Typescript interfaces
import PageTemplate from '@templates/PageTemplate';

const ArchivePage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { uid } = pageContext;
    const pageData = data.prismic.archive_page;
    const shows = data.prismic.allShows.edges;

    return (
        <PageTemplate
            slug={uid}
            pageConfig={pageData}
            currentLocation={location.pathname}
        >
            Archive Page
        </PageTemplate>
    );
};

export const query = graphql`
    query {
        prismic {
            archive_page(uid: "archive", lang: "en-us") {
                seo_title
                seo_hide
                seo_description
                seo_image
                remove_header
                remove_footer
                _meta {
                    firstPublicationDate
                    lastPublicationDate
                }
            }
            allShows {
                edges {
                    node {
                        author
                        title
                        season {
                            ... on PRISMIC_Season {
                                title
                                _meta {
                                    uid
                                }
                            }
                        }
                        performances {
                            datetime
                        }
                        poster_image
                        poster_imageSharp {
                            childImageSharp {
                                fluid(quality: 90) {
                                    ...GatsbyImageSharpFluid_withWebp
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
    prismic: {
        archive_page: {
            remove_header: boolean;
            remove_footer: boolean;
            seo_title: string;
            seo_description: string;
            seo_image?: PrismicImage;
            seo_hide: boolean;
            _meta: {
                firstPublicationDate: string;
                lastPublicationDate: string;
            };
        };
        allShows: {
            edges: {
                node: ShowSnippet;
            }[];
        };
    };
}

export default ArchivePage;
