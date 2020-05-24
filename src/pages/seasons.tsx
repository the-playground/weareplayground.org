import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImageProps } from 'gatsby-image';

// Import typescript interfaces
import { Season } from '@type/season';

// Import components
import { Layout } from '@components/layout';
import { SeasonCatalog } from '@components/ui';

const SeasonsPage: React.FC<SeasonsPageProps> = ({ data }) => {
    const seasons = data?.prismic?.allSeasons?.edges;
	const pageData = data?.prismic?.seasons_page; // eslint-disable-line

    if (!seasons || !pageData) {
        return <></>;
    }

    return (
        <Layout>
            {/* Seasons Hero Goes Here */}
            <SeasonCatalog seasons={seasons} />
            {/* Seasons CTA Goes Here */}
        </Layout>
    );
};

export const query = graphql`
    query SeasonsPageData {
        ...SeasonsPageFragment
        ...AllSeasonsSortedFragment
    }
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

interface SeasonsPageProps {
    data: {
        prismic: {
            allSeasons: {
                edges: Season[];
            };

            seasons_page: {
                title: string;
                subtitle: string;
                hero_image?: GatsbyImageProps;
                hero_imageSharp?: {
                    childImageSharp: GatsbyImageProps;
                };
                body: any;
            };
        };
    };
}

export default SeasonsPage;
