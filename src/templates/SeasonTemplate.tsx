import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext } from '@type/gatsby';
import { PrismicImage, PrismicExternalLink } from '@type/prismic';
import { ShowSnippet } from '@type/show';
import { SubscribeSection, LegacyContentNotice } from '@components/ui';

import { useConfigContext } from '@context';
import { useGetMetaImage, useCurrentURL } from '@hooks';

// Import components

import { Layout } from '@components/layout';
import { FluidImageProps } from '@components/foundations';

const SeasonLanding: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const season = data.prismicSeason;
    const { shows } = season.data;
    const seasonData = data.prismicSeason.data;

    const { uid } = pageContext;
    const siteConfig = useConfigContext();
    const url = useCurrentURL(location.pathname);
    const { metaImage } = useGetMetaImage('season', seasonData.seo_image);

    return (
        <Layout noHeader={false} noFooter={false}>
            <LegacyContentNotice
                contentType="season"
                title={`${seasonData.title} Season`}
                subTitle={seasonData.tagline}
                legacyURL={seasonData.legacy_url.url}
                legacyURLText="See Season On Old Website"
            />
            <SubscribeSection />
        </Layout>
    );
};

export const query = graphql`
    query seasonData($id: String!) {
        prismicSeason(id: { eq: $id }, lang: { eq: "en-us" }) {
            first_publication_date
            last_publication_date

            data {
                title
                tagline
                description
                hero_image {
                    alt
                    fluid {
                        ...GatsbyPrismicImageFluid
                    }
                }
                shows {
                    show {
                        document {
                            ... on PrismicShow {
                                data {
                                    author
                                    title
                                    performances {
                                        datetime
                                    }
                                    card_image {
                                        alt
                                        fluid {
                                            ...GatsbyPrismicImageFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                ## SEO Data
                seo_title
                seo_description
                seo_image {
                    alt
                    url
                    dimensions {
                        width
                        height
                    }
                }
                seo_hide

                ## Legacy Data
                legacy_url {
                    url
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
    prismicSeason: {
        data: {
            title: string;
            tagline: string;
            description: string;
            hero_image: FluidImageProps;

            shows: {
                show: {
                    document: {
                        data: ShowSnippet;
                    };
                };
            }[];
            seo_title: string;
            seo_description: string;
            seo_image: PrismicImage;
            seo_hide: boolean;

            legacy_url: PrismicExternalLink;
        };
    };
}

export default SeasonLanding;
