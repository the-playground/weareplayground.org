import { useStaticQuery, graphql } from 'gatsby'

export const useCompanyMetadata = () => {

	const { site } = useStaticQuery( graphql`

		query CompanyMetadata{
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

	`)

	return site.siteMetadata;

}
