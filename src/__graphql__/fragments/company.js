import gql from 'graphql-tag'

export const companyDataFragment = gql`

	fragment companyDataFragment on Query{

		allCompanyconfigs{
			edges{
				node{
					name
					contact_email
					website{
						...on _ExternalLink{
							url
						}
					}
					legal_name
					ein
					founding_date
					location_city
					location_state_code
					location_zip
					spotify{
						...on _ExternalLink{
							url
						}
					}
					facebook{
						...on _ExternalLink{
							url
						}
					}
					instagram{
						...on _ExternalLink{
							url
						}
					}
					facebook_app_id
				}
			}
		}
	}
`
