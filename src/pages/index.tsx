import React from 'react';
import { graphql } from 'gatsby';

// Import Typescript interfaces
import { Layout } from '@components/layout';

const HomePage: React.FC<HomePageProps> = ({ data }) => {
    const home = data.prismic.home_page;

    return <Layout>Home Page</Layout>;
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
