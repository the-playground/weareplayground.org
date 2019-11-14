import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Layout } from '../src/components/Layout';
import { SEOPageMeta } from '../src/components/SEO';
import { withApollo } from '../src/__utility__/withApollo';

const HOME_PAGE_QUERY = gql`
	query HomePageQuery {
		home_page(lang: "en-us", uid: "home") {
			page_name
			body {
				... on Home_pageBodyBasic_seo {
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
`;

const HomePage = () => {
	const { data, loading, error } = useQuery(HOME_PAGE_QUERY);

	if (loading) return <div />;

	return (
		<Layout>
			{/* <SEOPageMeta metadata={}/> */}
			<h1>{data.home_page.page_name}</h1>
		</Layout>
	);
};

export default withApollo(HomePage);
