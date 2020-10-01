import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { GatsbyPageContext } from '@type/gatsby';
import { PrismicImage, PrismicExternalLink } from '@type/prismic';
import { Artist } from '@type/artist';
import {
    PrismicCMSRichTextProps,
    RichTextDisplay,
    FluidImageProps,
} from '@components/foundations';
import { SubscribeSection } from '@components/ui';

import { useConfigContext } from '@context';
import { useGetMetaImage, useCurrentURL } from '@hooks';

import { Layout, Container } from '@components/layout';

const PostLanding: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const post = data.prismicPost;
    const postData = data.prismicPost.data;

    const { uid } = pageContext;
    const siteConfig = useConfigContext();
    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('post', postData.seo_image);

    console.log(post);
    console.log(url);
    console.log(uid);

    return (
        <Layout noHeader={false} noFooter={false}>
            <Container maxWidth="m">
                <RichTextDisplay content={postData.content} />
            </Container>
            <SubscribeSection />
        </Layout>
    );
};

export const query = graphql`
    query postData($id: String!) {
        prismicPost(id: { eq: $id }, lang: { eq: "en-us" }) {
            first_publication_date
            last_publication_date

            data {
                title
                featured_image {
                    alt
                    fluid {
                        ...GatsbyPrismicImageFluid
                    }
                }

                content {
                    raw
                }

                author {
                    document {
                        ... on PrismicArtist {
                            data {
                                bio {
                                    raw
                                    text
                                }
                                email
                                instagram {
                                    url
                                }
                                name
                                headshot {
                                    fluid {
                                        ...GatsbyPrismicImageFluid
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
    prismicPost: {
        data: {
            title: string;
            teaser: string;
            featured_image: FluidImageProps;
            content: PrismicCMSRichTextProps;
            author: {
                document: {
                    data: Artist;
                };
            };

            seo_title: string;
            seo_description: string;
            seo_image: PrismicImage;
            seo_hide: boolean;
        };
    };
}

export default PostLanding;
