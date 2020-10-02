import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext } from '@type/gatsby';
import { PrismicImage, PrismicExternalLink } from '@type/prismic';
import { ShowSnippet } from '@type/show';
import { SubscribeSection, LegacyContentNotice } from '@components/ui';

import { useConfigContext } from '@context';
import { useGetMetaImage, useCurrentURL } from '@hooks';

import { PageBasicSEO, StructuredData } from '@components/utility';
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
    const metaImage = useGetMetaImage('season', seasonData.seo_image);

    return (
        <>
            <PageBasicSEO
                url={url}
                title={seasonData.seo_title}
                description={seasonData.seo_description}
                image={metaImage}
                hideSEO={seasonData.seo_hide}
            />
            {/* Do not output structured data if this page will be hidden from SEO */}
            {seasonData.seo_hide ? null : (
                <StructuredData
                    siteConfig={siteConfig}
                    pageSchemaData={{
                        pageURL: url,
                        title: seasonData.seo_title,
                        description: seasonData.seo_description,
                        image: metaImage,
                        datePublished: season.first_publication_date,
                        dateModified: season.last_publication_date,
                    }}
                />
            )}
            <LegacyContentNotice
                contentType="season"
                title={`${seasonData.title} Season`}
                subTitle={seasonData.tagline}
                legacyURL={seasonData.legacy_url.url}
                legacyURLText="See season on old website"
            />
            <SubscribeSection />
        </>
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
                seo_hide
                seo_image {
                    url(imgixParams: { q: 100 })
                    alt
                    dimensions {
                        width
                        height
                    }
                }

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
        first_publication_date: string;
        last_publication_date: string;
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
