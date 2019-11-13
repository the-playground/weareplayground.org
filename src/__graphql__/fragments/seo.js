import { graphql } from 'gatsby'

// https://www.gatsbyjs.org/docs/graphql-concepts/#fragments

/**
 * Query important SEO information abou
 * Source » Prismic
 *
 * @since 1.0.0
 */
export const PageSEOFragment = graphql`
	fragment PageSEOFragment on Query {
		prismic {
			home_page(lang: "en-us", uid: "home") {
				body {
					... on PRISMIC_Home_pageBodyBasic_seo {
						type
						primary {
							meta_description
							meta_image
							meta_title
							twitter_card_image
						}
					}
				}
			}
		}
	}
`
