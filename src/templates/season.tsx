import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImageProps } from 'gatsby-image';

import { GatsbyPageContext } from '@type/gatsby';
import { ShowSnippet } from '@type/show';

// Import components
import { Layout } from '@components/layout';

const SeasonLanding: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { season } = data.prismic;
    const { uid, allSeasonsURL } = pageContext;
    // const url = useCurrentURL(location.pathname);

    return (
        <Layout noHeader={false} noFooter={false}>
            {season.title}
        </Layout>
    );
};

export const query = graphql`
    query seasonData($uid: String!) {
        prismic {
            season(lang: "en-us", uid: $uid) {
                title
                tagline
                description
                hero_image
                hero_imageSharp {
                    childImageSharp {
                        fluid(maxWidth: 1920, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                shows {
                    show {
                        ... on PRISMIC_Show {
                            ...ShowCatalogDataFragment
                        }
                    }
                }
                seo_title
                seo_description
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
        season: {
            title: string;
            tagline: string;
            description: string;
            hero_image: GatsbyImageProps;
            hero_imageSharp: {
                childImageSharp: GatsbyImageProps;
            };
            body: any;
            shows: ShowSnippet[];
        };
    };
}

export default SeasonLanding;
