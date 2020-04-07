import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImageProps } from 'gatsby-image';

// Import typescript interfaces
import { PageMeta } from '../__interfaces__/seo';
import { Season } from '../__interfaces__/season';

// Import components
import { Layout } from '../components/Layout';
import { SeasonCatalog } from '../components/season';

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
                body: PageMeta;
            };
        };
    };
}

export default SeasonsPage;
