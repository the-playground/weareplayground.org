import { useRouter } from  'next/router'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { ShowData } from '../../lib/__graphql__/fragments/show'
import {Layout} from '../../lib/components/Layout'
import {withApollo} from '../../lib/__utility__/withApollo'

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
						fields {
							video_description
							video_embed_url
							video_id
							video_title
						}
						type
					}
					... on ShowBodySpotify_playlist {
						fields {
							spotify_playlist_id
						}
						type
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

	if (loading) return <div />

	console.log(data);

	return (

		<Layout>
			<h1>{uid}</h1>
		</Layout>

	)

}

export default withApollo( Show )
