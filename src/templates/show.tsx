import React from 'react';
import { graphql } from 'gatsby';

// Import typescript interfaces
import { PageMeta } from '../__interfaces__/Seo';
import { Show } from '../__interfaces__/Show';

// Import components
import { SEOPageMeta } from '../components/seo';
import { getSlice } from '../__utility__/prismic';
import { Layout } from '../components/Layout';

const ShowLanding: React.FC<ShowLandingProps> = ({ data, pageContext }) => {
    const { show } = data.prismic;
    const { uid, seasonUID, seasonURL } = pageContext;

    if (!show) return <></>;

    return (
        <Layout>
            {show.title}
            <button
                type="button"
                className="snipcart-add-item"
                data-item-id={uid}
                data-item-price="20.00"
                data-item-url="https://weareplayground.org/shows/the-breakfast-club"
                data-item-description="The Breakfast Club Presented by The Playground"
                data-item-name={show.title}
            >
                Purchase Tickets
            </button>
        </Layout>
    );
};

export const query = graphql`
    query showData($uid: String!) {
        prismic {
            show(lang: "en-us", uid: $uid) {
                ...FullShowDataFragment
            }
        }
    }
`;

/**
 * ----------
 * Prop Types
 * ----------
 */

interface ShowLandingProps {
    data: {
        prismic: {
            show: Show;
        };
    };

    pageContext: {
        uid: string;
        seasonUID: string;
        seasonURL: string;
    };
}

export default ShowLanding;
