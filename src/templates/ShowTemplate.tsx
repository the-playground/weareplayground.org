import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext } from '@type/gatsby';
import { Show } from '@type/show';

import { useConfigContext } from '@context';
import { useGetMetaImage, useCurrentURL, useShowStatus } from '@hooks';

// Import components
import { Layout } from '@components/layout';
import { LegacyContentNotice } from '@components/ui';

const ShowLanding: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const show = data.prismicShow.data;
    const { uid, seasonUID, seasonURL } = pageContext;

    const siteConfig = useConfigContext();
    const url = useCurrentURL(location.pathname);
    const { metaImage } = useGetMetaImage('season', show.seo_image);
    const { status } = useShowStatus(show.performances);

    return (
        <Layout noHeader={false} noFooter={false}>
            <LegacyContentNotice
                title={show.title}
                subTitle={`by ${show.author}`}
                contentType="show"
                legacyURL={show.legacy_url.url}
                legacyURLText="See Show On Old Website"
            />
        </Layout>
    );
};

export const query = graphql`
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
    prismicShow: {
        data: Show;
    };
}

export default ShowLanding;
