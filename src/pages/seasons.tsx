import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext } from '@type/gatsby';
import { Season } from '@type/season';

// Import components
import { Layout } from '@components/layout';
import { SeasonCatalog } from '@components/ui';

const SeasonsPage: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
}) => {
    const seasons = data?.prismic?.allSeasons?.edges;

    return (
        <Layout noHeader={false} noFooter={false}>
            {/* Seasons Hero Goes Here */}
            <SeasonCatalog seasons={seasons} />
            {/* Seasons CTA Goes Here */}
        </Layout>
    );
};

export const query = graphql`
    query SeasonsPageData {
        ...FullSeasonCatalogFragment
    }
`;

interface PageData {
    prismic: {
        allSeasons: {
            edges: Season[];
        };
    };
}

export default SeasonsPage;
