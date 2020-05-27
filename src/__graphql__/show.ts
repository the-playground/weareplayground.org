import { graphql } from 'gatsby';

/**
 * Query all information about a show
 * Source » Prismic
 *
 * @since 1.0.0
 */

export const FullShowDataFragment = graphql`
    fragment FullShowDataFragment on PRISMIC_Show {
        title
        author
        author_link {
            ... on PRISMIC__ExternalLink {
                url
            }
        }
        script_link {
            ... on PRISMIC__ExternalLink {
                url
            }
        }
        hero_image
        hero_imageSharp {
            childImageSharp {
                fluid(maxWidth: 1920, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        teaser
        description
        tagline
        hashtag
        effects_advisory
        content_advisory
        intermissions
        runtime_hours
        runtime_minutes
        performances {
            datetime
            preview
            price
            pwyw
            status
            talkback
        }
        seo_title
        seo_description
    }
`;

/**
 *
 * Source » Prismic
 *
 * @since 1.0.0
 */
export const ShowCatalogDataFragment = graphql`
    fragment ShowCatalogDataFragment on PRISMIC_Show {
        _meta {
            uid
        }
        title
        author
        # catalog_image
        # catalog_imageSharp {
        #     childImageSharp {
        #         fluid(maxWidth: 1200, quality: 100) {
        #             ...GatsbyImageSharpFluid_withWebp
        #         }
        #     }
        # }
        performances {
            datetime
        }
    }
`;
