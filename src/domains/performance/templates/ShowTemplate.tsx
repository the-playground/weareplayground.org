import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext } from '@nerve/shared/types';

import { useConfigContext } from '@nerve/shared/context';
import { useGetMetaImage, useCurrentURL } from '@nerve/shared/hooks';

import { LegacyContentNotice } from '@nerve/domains/migrations';
import { SubscribeSection } from '@nerve/domains/engagement';

import { PageBasicSEO, StructuredData } from '@nerve/domains/seo';

import { Show } from '../index.d';
import { useShowStatus } from '../__hooks__';

const ShowLanding: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const show = data.prismicShow.data;
    const { uid, seasonUID, seasonURL } = pageContext;

    const siteConfig = useConfigContext();
    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('season', show.seo_image);
    const { status } = useShowStatus(show.performances);

    return (
        <>
            <PageBasicSEO
                url={url}
                title={show.seo_title}
                description={show.seo_description}
                image={metaImage}
                hideSEO={show.seo_hide}
            />
            {/* Do not output structured data if this page will be hidden from SEO */}
            {show.seo_hide ? null : (
                <StructuredData
                    siteConfig={siteConfig}
                    pageSchemaData={{
                        pageURL: url,
                        title: show.seo_title,
                        description: show.seo_description,
                        image: metaImage,
                        datePublished: data.prismicShow.first_publication_date,
                        dateModified: data.prismicShow.last_publication_date,
                    }}
                />
            )}
            <LegacyContentNotice
                title={show.title}
                subTitle={`by ${show.author}`}
                contentType="show"
                legacyURL={show.legacy_url.url}
                legacyURLText="see show on old website"
            />
            <SubscribeSection />
        </>
    );
};

export const showQuery = graphql`
    query showData($uid: String!) {
        prismicShow(uid: { eq: $uid }, lang: { eq: "en-us" }) {
            first_publication_date
            last_publication_date
            data {
                title
                author
                author_link {
                    url
                }
                script_link {
                    url
                }
                hero_image {
                    alt
                    localFile {
                        childImageSharp {
                            fluid(quality: 90) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                teaser
                description {
                    raw
                }
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

                ## Legacy Data
                legacy_url {
                    url
                }

                # SEO Config Data
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
    prismicShow: {
        first_publication_date: string;
        last_publication_date: string;
        data: Show;
    };
}

export default ShowLanding;
