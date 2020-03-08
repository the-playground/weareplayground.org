import React from 'react';
import { graphql } from 'gatsby';

// Import Typescript interfaces
import { PageMeta } from '../__interfaces__/Seo';

import { Layout } from '../components/Layout';
import { getSlice } from '../__utility__/prismic';

import { useConfigContext } from '../__hooks__/useContext';

const HomePage: React.FC<HomePageProps> = ({ data }) => {
    const home = data.prismic.home_page;
    const pageMeta = getSlice(home.body, `basic_seo`);

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
