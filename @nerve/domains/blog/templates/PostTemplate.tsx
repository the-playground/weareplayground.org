import React from 'react';
import { graphql, PageProps } from 'gatsby';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';

import { GatsbyPageContext } from '@type/gatsby';
import { PrismicImage } from '@type/prismic';
import { Author } from '@type/artist';

import { PageBasicSEO, StructuredData } from '@nerve/core/components/utility';

import {
    BodyText,
    Heading,
    Image,
    Container,
    PrismicCMSRichTextProps,
    RichTextDisplay,
    FluidImageProps,
} from '@nerve/core/components';

import { AuthorCard } from '@nerve/domains/blog';
import { SubscribeSection } from '@nerve/domains/engagement';

import { useConfigContext } from '@nerve/shared/context';
import { useGetMetaImage, useCurrentURL } from '@nerve/shared/hooks';
import {
    animation,
    appNavBreakpoint,
    borders,
    spacing,
} from '@nerve/core/tokens';

const BlogHero = styled.div`
    padding-top: ${spacing.layout.m};
    padding-bottom: ${spacing.layout.s};

    ${appNavBreakpoint} {
        padding-bottom: ${spacing.layout.m};
        padding-top: ${spacing.layout.xl};
    }

    .title {
        margin-bottom: ${spacing.component.m};
    }

    .featured-image {
        border-radius: ${borders.imageRadius};
        margin-top: ${spacing.layout.m};

        ${appNavBreakpoint} {
            margin-top: ${spacing.layout.l};
        }
    }
`;

const StyledContent = styled.div`
    padding-bottom: ${spacing.layout.m};

    p {
        margin-top: ${spacing.component.xl};
    }

    p strong {
        color: ${({ theme }) => theme.typography.accent};
    }

    .content-link {
        display: inline-block;
        position: relative;
        --scaleX: 0.95;
        --rotate: 0deg;
        --skew: -20deg;

        &:before {
            height: 3px;
            position: absolute;
            background: ${({ theme }) => theme.typography.accentDark};
            content: '';
            width: 100%;
            bottom: 0px;
            z-index: -1;
            transition: ${animation.linkHover};
            transform: skew(var(--skew)) rotate(var(--rotate))
                scaleX(var(--scaleX));
            opacity: 0.9;
        }

        &:hover :before {
            --scaleX: 1.03;
            background: ${({ theme }) => theme.typography.accent};
            opacity: 1;
        }
    }

    .content-link:hover {
        --linkScaleX: 1.03;
    }

    > figure {
        margin-top: ${spacing.layout.m};
        margin-bottom: ${spacing.layout.m};
    }

    > figure img {
        border-radius: ${borders.imageRadius};
        width: 100%;
        height: auto;
    }

    > figure .copyright {
        margin-top: ${spacing.component.s};
    }

    /* Grunge heading */
    > div {
        margin-bottom: ${spacing.component.l};
        margin-top: ${spacing.component.xxl};
    }

    h2,
    h3,
    h4 {
        margin-bottom: ${spacing.component.s};
        margin-top: ${spacing.component.xxl};
    }

    /* Any heading tags that are followed immediately by a standard paragraph */
    > :is(div, h2, h3, h4, h5, h6) + p {
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
    const rawPostedOnDate = parseISO(postData.published_on);
    const postedOnDate = format(rawPostedOnDate, 'PP');

    return (
        <>
            <PageBasicSEO
                url={url}
                title={postData.seo_title}
                description={postData.seo_description}
                image={metaImage}
                hideSEO={postData.seo_hide}
            />
            {/* Do not output structured data if this page will be hidden from SEO */}
            {postData.seo_hide ? null : (
                <StructuredData
                    siteConfig={siteConfig}
                    pageSchemaData={{
                        pageURL: url,
                        title: postData.seo_title,
                        description: postData.seo_description,
                        image: metaImage,
                        datePublished: post.first_publication_date,
                        dateModified: post.last_publication_date,
                    }}
                />
            )}
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
                    <Image
                        fluid={postData.featured_image.fluid}
                        alt={postData.featured_image.alt}
                        className="featured-image"
                    />
                </BlogHero>
                <StyledContent>
                    <RichTextDisplay content={postData.content} />
                </StyledContent>
                <AuthorCard
                    name={author.name}
                    bio={author.bio}
                    headshot={author.headshot}
                    instagram={author.instagram}
                />
            </Container>
            <SubscribeSection />
        </>
    );
};

export const query = graphql`
    query postData($id: String!) {
        prismicPost(id: { eq: $id }, lang: { eq: "en-us" }) {
            first_publication_date
            last_publication_date

            data {
                title
                published_on
                featured_image {
                    alt
                    fluid(maxWidth: 800) {
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
                                bio
                                email
                                instagram {
                                    url
                                }
                                name
                                headshot {
                                    alt
                                    fixed(width: 80) {
                                        ...GatsbyPrismicImageFixed
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
                    url(imgixParams: { q: 100 })
                    alt
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
            published_on: string;
            featured_image: FluidImageProps;
            content: PrismicCMSRichTextProps;
            author: {
                document: {
                    data: Author;
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
