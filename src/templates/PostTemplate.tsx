import React from 'react';
import { graphql, PageProps } from 'gatsby';
import styled from 'styled-components';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import { GatsbyPageContext } from '@type/gatsby';
import { PrismicImage, PrismicExternalLink } from '@type/prismic';
import { Artist } from '@type/artist';
import {
    BodyText,
    Heading,
    PrismicCMSRichTextProps,
    RichTextDisplay,
    FluidImageProps,
} from '@components/foundations';
import { SimpleHero, SubscribeSection } from '@components/ui';

import { useConfigContext } from '@context';
import { useGetMetaImage, useCurrentURL } from '@hooks';
import { breakpoints, appNavBreakpoint, spacing } from '@tokens';

import { Layout, Container } from '@components/layout';

const BlogHero = styled.div`
    padding-top: ${spacing.layout.m};
    padding-bottom: ${spacing.layout.m};

    ${appNavBreakpoint} {
        padding-top: ${spacing.layout.xl};
    }

    .title {
        margin-bottom: ${spacing.component.m};
    }

    .image {
    }
`;

const StyledContent = styled.div`
    padding-bottom: ${spacing.layout.l};

    p {
        margin-top: ${spacing.component.xl};
    }

    h2,
    h3,
    h4,
    h5 {
        margin-bottom: ${spacing.component.s};
    }

    h2,
    h3 {
        margin-top: ${spacing.component.xxl};
    }

    h4,
    h5 {
        margin-top: ${spacing.component.xl};
    }

    /* Any heading tags that are followed immediately by a standard paragraph */
    > :is(h2, h3, h4, h5, h6) + p {
        margin-top: 0;
    }
`;

const PostLanding: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const post = data.prismicPost;
    const postData = data.prismicPost.data;
    const author = postData.author.document.data;

    const { uid } = pageContext;
    const siteConfig = useConfigContext();
    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('post', postData.seo_image);

    // Format the posted-on date
    const rawPostedOnDate = parseISO(post.first_publication_date);
    const postedOnDate = format(rawPostedOnDate, 'PP');

    return (
        <Layout noHeader={false} noFooter={false}>
            <Container maxWidth="s">
                <BlogHero>
                    <Heading tag="h1" size="s" color="light" className="title">
                        {postData.title}
                    </Heading>
                    <BodyText
                        tag="p"
                        size="l"
                        color="medium"
                        className="subtitle"
                    >
                        {postedOnDate} • by {author.name}
                    </BodyText>
                </BlogHero>
                <StyledContent>
                    <RichTextDisplay content={postData.content} />
                </StyledContent>
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
        first_publication_date: string;
        last_publication_date: string;
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
