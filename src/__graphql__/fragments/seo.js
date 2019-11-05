import { graphql } from 'gatsby'

// https://www.gatsbyjs.org/docs/graphql-concepts/#fragments

/**
 * @since 1.0.0
 */
export const SiteGlobalSEOFragment = graphql`
	fragment SiteGlobalSEOFragment on Query {
		site {
			siteMetadata {
				company {
					name
					email
					url
					legal {
						name
						ein
						foundingDate
					}
					location {
						city
						state
						stateCode
						zip
					}
					social {
						spotify
						facebook
						instagram
					}
				}
				siteVerification {
					google
					bing
					norton
				}
			}
		}
	}
`

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
							description
							image
							title
						}
					}
				}
			}
		}
	}
`
