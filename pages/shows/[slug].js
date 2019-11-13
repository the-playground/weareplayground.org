import { useRouter } from  'next/router'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { ShowData } from '../../src/__graphql__/fragments/show'
import {Layout} from '../../src/components/Layout'
import {withApollo} from '../../src/__utility__/withApollo'

const SHOW_QUERY = gql`
	query ShowQuery( $uid: String! ) {
		show(lang: "en-us" uid: $uid){
				title
				author
				author_link {
					... on _ExternalLink {
						url
					}
				}
				script_link {
					... on _ExternalLink {
						url
					}
				}
				thumbnail_image
				featured_image
				hero_image
				short_description
				long_description
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
				location {
					... on Location {
						name
						street
						state
						zip
						geo_point
						city
						parking_info
					}
				}
				artists {
					artist {
						... on Artist {
							name
						}
					}
					bio
					role
				}
				sponsors {
					contribution
					sponsor {
						... on Sponsor {
							name
							description
							website {
								... on _ExternalLink {
									url
									_linkType
								}
							}
						}
					}
				}
				body {
					... on ShowBodyVideo_collection {
						type
						fields {
							video_description
							video_embed_url
							video_id
							video_title
						}
					}
					... on ShowBodySpotify_playlist {
						type
						fields {
							spotify_playlist_id
						}
					}
					... on ShowBodyBasic_seo {
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
`

const Show = () => {

	const router = useRouter()
	const { slug } = router.query
	const uid = slug;

	// https://www.apollographql.com/docs/react/data/queries/
	const { data, loading, error } = useQuery( SHOW_QUERY, {
		variables: { uid }
	});


	// Implement page loading state
	if (loading) return <div />

	const { show } = data

	// Render a 404 Page if the URL doesn't actually exist.
	if( ! show ) return 'not found'

	return (

		<Layout>
			<h1>{uid}</h1>
		</Layout>

	)

}

export default withApollo( Show )
