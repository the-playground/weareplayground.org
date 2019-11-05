import { graphql } from 'gatsby'

/**
 * Query important company data
 * Source » Prismic
 *
 * @since 1.0.0
 */
export const CompanyInfoFragment = graphql`
	fragment CompanyInfoFragment on Query {
		prismic {
			allCompanyconfigs {
				edges {
				  node {
					contact_email
					ein
					facebook {
					  ... on PRISMIC__ExternalLink {
						_linkType
						url
					  }
					}
					facebook_app_id
					founding_date
					instagram {
					  ... on PRISMIC__ExternalLink {
						_linkType
						url
					  }
					}
					legal_name
					location_city
					location_state
					location_zip
					location_state_code
					name
					spotify {
					  ... on PRISMIC__ExternalLink {
						_linkType
						url
					  }
					}
					website {
					  ... on PRISMIC__ExternalLink {
						url
					  }
					}
				  }
				}
			}
		}
	}
`
