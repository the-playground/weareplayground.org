import React from 'react';
import { graphql } from 'gatsby';

// Import Typescript interfaces
import { PageMeta } from '../__interfaces__/seo';

import { Layout } from '../components/Layout';
import { SEOPageMeta } from '../components/SEO';
import { getSlice } from '../__utility__/prismic';

const HomePage: React.FC<HomePageProps> = ({ data }) => {
	const home = data.prismic.home_page;

	const pageMeta = getSlice(home.body, `basic_seo`);

	return (
		<Layout>
			<SEOPageMeta metadata={pageMeta} />
			Home Page
		</Layout>
	);
};

export const query = graphql`
	query HomePageData {
		...HomePageDataFragment
	}
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

interface HomePageProps {
	data: {
		prismic: {
			home_page: {
				body: PageMeta;
			};
		};
	};
}

export default HomePage;
