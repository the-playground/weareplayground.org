import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { format, parseISO } from 'date-fns';

import { GatsbyPageContext } from '@nerve/shared/types';

import { PageBasicSEO, StructuredData } from '@nerve/domains/seo';
import { AuthorCard, BlogPost } from '@nerve/domains/blog';

import {
    BodyText,
    Heading,
    Image,
    Container,
    PrismicCMSRichTextProps,
    RichTextDisplay,
} from '@nerve/core/components';

import { SubscribeSection } from '@nerve/domains/engagement';

import { useConfigContext } from '@nerve/shared/context';
import { useGetMetaImage, useCurrentURL } from '@nerve/shared/hooks';

import * as styled from './PostTemplate.styles';

/**
 * TODO: Properly configure blog posts for the potential of multiple authors
 */

/**
 *
 */
const PostLanding: React.FC<PageProps<PageData, GatsbyPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const prismicPostData = data.prismicPost.data;
    const { sanityPost: post } = data;

    const { authors } = post;
    const siteConfig = useConfigContext();
    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('post', post.seo.image.asset);

    // Format the posted-on date
    const rawPostedOnDate = parseISO(post.seo.publishedAt);
    const postedOnDate = format(rawPostedOnDate, 'PP');

    return (
        <>
            <PageBasicSEO
                url={url}
                title={post.seo.title}
                description={post.seo.description}
                image={metaImage}
                hideSEO={post.seo.hide}
            />
            {/* Do not output structured data if this page will be hidden from SEO */}
            {post.seo.hide ? null : (
                <StructuredData
                    siteConfig={siteConfig}
                    pageSchemaData={{
                        pageURL: url,
                        title: post.seo.title,
                        description: post.seo.description,
                        image: metaImage,
                        datePublished: post.seo.publishedAt,
                        dateModified: post._updatedAt,
                    }}
                />
            )}
            <Container maxWidth="s">
                <styled.BlogHero>
                    <Heading as="h1" size="s" color="light" className="title">
                        {post.title}
                    </Heading>
                    <BodyText size="l" color="medium" className="subtitle">
                        {postedOnDate} • by{' '}
                        {authors.map((author) => author.name).join(' & ')}
                    </BodyText>
                    <Image
                        fluid={post.featuredImage.asset.fluid}
                        alt={post.featuredImage.alt}
                        className="featured-image"
                    />
                </styled.BlogHero>
                <styled.Content>
                    <RichTextDisplay content={prismicPostData.content} />
                </styled.Content>
                {authors.map((author) => (
                    <AuthorCard
                        name={author.name}
                        brief={author.brief}
                        headshot={{
                            alt: author.headshot.alt!,
                            asset: author.headshot.asset,
                        }}
                        instagram={author.instagram}
                        key={author.name}
                    />
                ))}
            </Container>
            <SubscribeSection />
        </>
    );
};

export const query = graphql`
    query postData($uid: String!) {
        prismicPost(uid: { eq: $uid }, lang: { eq: "en-us" }) {
            data {
                content {
                    raw
                }
            }
        }
        sanityPost(slug: { current: { eq: $uid } }) {
            title

            featuredImage {
                alt
                asset {
                    fluid {
                        ...GatsbySanityImageFluid
                    }
                }
            }

            authors {
                name
                brief
                instagram
                headshot {
                    alt
                    asset {
                        fixed(width: 80, height: 80) {
                            ...GatsbySanityImageFixed
                        }
                    }
                }
            }

            seo {
                title
                hide
                description
                image {
                    asset {
                        url
                    }
                }
                publishedAt
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
            content: PrismicCMSRichTextProps;
        };
    };
    sanityPost: BlogPost;
}

export default PostLanding;
