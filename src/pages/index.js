import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEOPageMeta } from '../components/SEO';
import { getSlice } from '../__utility__/prismic';

const HomePage = ({ data }) => {
	const home = data.prismic.home_page;

	const pageMeta = getSlice(home.body, 'basic_seo');

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

HomePage.propTypes = {
	data: PropTypes.object.isRequired,
};

export default HomePage;
