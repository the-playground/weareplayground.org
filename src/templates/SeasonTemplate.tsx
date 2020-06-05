import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImageProps } from 'gatsby-image';

import { GatsbyPageContext } from '@type/gatsby';
import { PrismicImage } from '@type/prismic';
import { ShowSnippet } from '@type/show';

import { useConfigContext } from '@context';
import { useGetMetaImage, useCurrentURL } from '@hooks';

// Import components
import { Layout } from '@components/layout';

const SeasonLanding: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { season } = data.prismic;
    const { shows } = season;

    const { uid } = pageContext;
    const siteConfig = useConfigContext();
    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('season', season.seo_image);

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
                            author
                            title
                            performances {
                                datetime
                            }
                            card_image
                            card_imageSharp {
                                childImageSharp {
                                    fluid(quality: 90) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
                seo_title
                seo_description
                seo_image
                seo_hide
                _meta {
                    firstPublicationDate
                    lastPublicationDate
                }
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
            shows: {
                show: ShowSnippet;
            }[];
            seo_title: string;
            seo_description: string;
            seo_image: PrismicImage;
            seo_hide: boolean;
        };
    };
}

export default SeasonLanding;
