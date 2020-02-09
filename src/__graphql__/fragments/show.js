import { graphql } from 'gatsby';

/**
 * Query all information about a show
 * Source » Prismic
 *
 * @since 1.0.0
 */

export const expandedShowDataFragment = graphql`
	fragment expandedShowDataFragment on PRISMIC_Show {
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
		thumbnail_image
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
			... on PRISMIC_Location {
				name
				street
				state
				zip
				city
				parking_info
				notes
			}
		}
		artists {
			artist {
				... on PRISMIC_Artist {
					name
				}
			}
			bio
			role
		}
		sponsors {
			contribution
			sponsor {
				... on PRISMIC_Sponsor {
					name
					description
					website {
						... on PRISMIC__ExternalLink {
							url
							_linkType
						}
					}
				}
			}
		}
		body {
			... on PRISMIC_ShowBodyVideo_collection {
				fields {
					video_description
					video_embed_url
					video_id
					video_title
				}
				type
			}
			... on PRISMIC_ShowBodySpotify_playlist {
				fields {
					spotify_playlist_id
				}
				type
			}
			... on PRISMIC_ShowBodyBasic_seo {
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
`;

/**
 * Get information about ALL Playground shows.
 * Source » Prismic
 *
 * @since 1.0.0
 */
export const AllShowsFragment = graphql`
	fragment AllShowsFragment on Query {
		prismic {
			allShows {
				edges {
					node {
						_meta {
							uid
						}
						title
						author
						thumbnail_image
						feed_image
						feed_imageSharp {
							childImageSharp {
								fluid(maxWidth: 1200, quality: 100) {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}

						performances {
							datetime
						}
					}
				}
			}
		}
	}
`;
