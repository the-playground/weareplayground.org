import React from 'react';
import { graphql } from 'gatsby';

/**
 * Query important SEO information about a given page
 * Source » Prismic
 *
 * @since 1.0.0
 */
export const HomePageSEOFragment = graphql`
	fragment HomePageSEOFragment on Query {
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
`;
