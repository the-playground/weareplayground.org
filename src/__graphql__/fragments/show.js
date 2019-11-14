import gql from 'graphql-tag';

/**
 * Query all information about a show
 * Source » Prismic
 *
 * @since 1.0.0
 */
export const ShowData = {
	show: gql`
		fragment ShowData on Show {
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
	`,
};

/**
 * Get information about ALL Playground shows.
 * Source » Prismic
 *
 * @since 1.0.0
 */
export const AllShowsFragment = gql`
	fragment AllShowsFragment on Query {
		prismic {
			allShows {
				edges {
					node {
						title
						author
						thumbnail_image
						featured_image

						location {
							... on Location {
								name
								street
								city
								state
								zip
								geo_point
							}
						}

						performances {
							datetime
							preview
							price
							pwyw
							talkback
						}
					}
				}
			}
		}
	}
`;
