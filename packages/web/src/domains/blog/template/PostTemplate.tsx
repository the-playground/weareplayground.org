import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { format, parseISO } from 'date-fns';

import { GatsbyPageContext } from '@nerve/shared/types';

import { PageBasicSEO, StructuredData } from '@nerve/domains/seo';
import { AuthorCard, BlogPost } from '@nerve/domains/blog';

import {
    BodyText,
    Heading,
    SanityImage,
    Container,
    PortableText,
} from '@nerve/core/components';

import { SubscribeSection } from '@nerve/domains/engagement';

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
    const { sanityPost: post } = data;

    const { authors } = post;
    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('post', post.seo.image);

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
                    <SanityImage
                        image={post.featuredImage.asset}
                        alt={post.featuredImage.alt ?? ''}
                        className="featured-image"
                    />
                </styled.BlogHero>
                <styled.Content>
                    <PortableText content={post._rawContent} />
                </styled.Content>
                {authors.map((author) => (
                    <AuthorCard
                        name={author.name}
                        brief={author.brief}
                        avatar={{
                            alt: author.avatar.alt,
                            asset: author.avatar.asset,
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
        sanityPost(slug: { current: { eq: $uid } }) {
            title

            featuredImage {
                alt
                asset {
                    url
                }
            }

            _rawContent(resolveReferences: { maxDepth: 10 })

            authors {
                name
                brief
                instagram
                avatar {
                    alt
                    asset {
                        url
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
    sanityPost: BlogPost;
}

export default PostLanding;
