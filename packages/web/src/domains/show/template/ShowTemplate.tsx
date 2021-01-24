import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useConfigContext } from '@nerve/shared/context';
import { useGetMetaImage, useCurrentURL } from '@nerve/shared/hooks';

import { SubscribeSection } from '@nerve/domains/engagement';

import { PageBasicSEO, StructuredData } from '@nerve/domains/seo';
import { LegacyContentNotice } from '@nerve/domains/migrations';

import { ShowPage, ShowPageContext } from '../types';
import { useShowStatus } from '../__hooks__';

const ShowLanding: React.FC<PageProps<PageData, ShowPageContext>> = ({
    data,
    pageContext,
    location,
}) => {
    const { sanityShow: show } = data;
    const { slug, seasonSlug, seasonURL } = pageContext;

    const url = useCurrentURL(location.pathname);
    const metaImage = useGetMetaImage('season', show.seo.image);

    const { status } = useShowStatus(show.performances);

    return (
        <>
            <PageBasicSEO
                url={url}
                title={show.seo.title}
                description={show.seo.description}
                image={metaImage}
                hideSEO={show.seo.hide}
            />
            {/* Do not output structured data if this page will be hidden from SEO */}
            {show.seo.hide ? null : (
                <StructuredData
                    pageSchemaData={{
                        pageURL: url,
                        title: show.seo.title,
                        description: show.seo.description,
                        image: metaImage,
                        datePublished: show.seo.publishedAt,
                        dateModified: show._updatedAt,
                    }}
                />
            )}
            <LegacyContentNotice
                title={show.title}
                subTitle={`by ${show.author.name}`}
                contentType="show"
                legacyURL={`https://theplaygroundtheatre.org/shows/${slug}`}
                legacyURLText="see show on old website"
            />

            <SubscribeSection />
        </>
    );
};

export const showQuery = graphql`
    query showData($id: String!) {
        sanityShow(_id: { eq: $id }) {
            _createdAt
            _updatedAt
            title
            author {
                name
                bioLink
                scriptLink
            }
            openDate
            closeDate
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
    sanityShow: ShowPage;
}

export default ShowLanding;
