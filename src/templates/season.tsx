import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImageProps } from 'gatsby-image';

// Import typescript interfaces
import { PageMeta } from '../__interfaces__/Seo';
import { ShowCard } from '../__interfaces__/Show';

// Import components
import { Layout } from '../components/Layout';

const SeasonLanding: React.FC<SeasonLandingProps> = ({ data, pageContext }) => {
	const { season } = data.prismic;
	const { uid, allSeasonsURL } = pageContext;

	if (!season) return <></>;

	return <Layout>{season.title}</Layout>;
};

export const query = graphql`
	query seasonData($uid: String!) {
		prismic {
			season(lang: "en-us", uid: $uid) {
				title
				tagline
				description
				hero_image
				hero_imageSharp {
					childImageSharp {
						fluid(maxWidth: 1920, quality: 100) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				body {
					... on PRISMIC_SeasonBodyBasic_seo {
						type
						primary {
							meta_description
							meta_image
							meta_title
							twitter_card_image
						}
					}
				}
				shows {
					show {
						... on PRISMIC_Show {
							...ShowCatalogDataFragment
						}
					}
				}
			}
		}
	}
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

interface SeasonLandingProps {
	data: {
		prismic: {
			season: {
				title: string;
				tagline: string;
				description: string;
				hero_image: GatsbyImageProps;
				hero_imageSharp: {
					childImageSharp: GatsbyImageProps;
				};
				body: PageMeta;
				shows: ShowCard[];
			};
		};
	};

	pageContext: {
		uid: string;
		allSeasonsURL: string;
	};
}

export default SeasonLanding;
