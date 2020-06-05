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
                title
                author
                author_link {
                    ... on PRISMIC__ExternalLink {
                        url
                    }
                }
                script_link {
                    ... on PRISMIC__ExternalLink {
                        url
                    }
                }
                hero_image
                hero_imageSharp {
                    childImageSharp {
                        fluid(maxWidth: 1920, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                teaser
                description
                tagline
                hashtag
                effects_advisory
                content_advisory
                intermissions
                runtime_hours
                runtime_minutes
                performances {
                    datetime
                    preview
                    price
                    pwyw
                    status
                    talkback
                }
                seo_title
                seo_description
                seo_image
                seo_hide
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
