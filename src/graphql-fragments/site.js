import { graphql } from 'gatsby'

/**
 * Query site verification codes
 * Source » Prismic
 *
 * @since 1.0.0
 */
export const SiteVerificationFragment = graphql`

	fragment SiteVerificationFragment on Query {
		prismic {
			allSiteconfigs {
				edges {
				  node {
					verification_google
					verification_bing
					verification_norton
				  }
				}
			}
		}
	}

`
