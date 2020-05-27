import { graphql } from 'gatsby';

/**
 * Get all seasons sorted by year (most recent to least)
 * Source » Prismic
 *
 * @since 1.0.0
 */
export const FullSeasonCatalogFragment = graphql`
    fragment FullSeasonCatalogFragment on Query {
        prismic {
            # Query the seasons page to get SEO metadata
            ## ---
            # Query every available season and sort by the title (which will be the years the seasons spans)
            allSeasons(sortBy: title_DESC) {
                edges {
                    node {
                        _meta {
                            uid
                        }
                        title
                        tagline
                        description
                        catalog_image
                        catalog_imageSharp {
                            childImageSharp {
                                fluid(maxWidth: 1200, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        # Get all the shows in each season
                        shows {
                            show {
                                # Query each show in the season for the data we want to work with
                                ... on PRISMIC_Show {
                                    title
                                    author
                                    performances {
                                        datetime
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
