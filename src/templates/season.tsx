import React from 'react';
import { graphql, Page } from 'gatsby';

// Import typescript interfaces
import { SharpImage, ResponsiveImage } from '../__interfaces__/image';
import { PageMeta } from '../__interfaces__/seo';
import { ShowCard } from '../__interfaces__/show';

// Import components
import { SEOPageMeta } from '../components/SEO';
import { getSlice } from '../__utility__/prismic';
import { Layout } from '../components/Layout';


const SeasonLanding: React.FC<SeasonTemplate> = ({ data, pageContext }) => {

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

interface SeasonTemplate {

	data: {
		prismic: {
			season: {
				title: string;
				tagline: string;
				description: string;
				hero_image: ResponsiveImage;
				hero_imageSharp: SharpImage;
				body: PageMeta;
				shows: ShowCard[];
			}
		}
	}

	pageContext: {
		uid: string;
		allSeasonsURL: string;
	}
}

export default SeasonLanding;
