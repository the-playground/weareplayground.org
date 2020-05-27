import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext } from '@type/gatsby';
import { Show } from '@type/show';

// Import components
import { Layout } from '@components/layout';

const ShowLanding: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { show } = data.prismic;
    const { uid, seasonUID, seasonURL } = pageContext;
    // const url = useCurrentURL(location.pathname);

    return (
        <Layout noHeader={false} noFooter={false}>
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

interface PageData {
    prismic: {
        show: Show;
    };
}

export default ShowLanding;
