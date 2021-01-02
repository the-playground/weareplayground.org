import React from 'react';

import { getShowSlug } from '@nerve/shared/lib';
import { Link } from '@nerve/core/routing';
import { SanityFluidImage } from '@nerve/shared/types';

import {
    BodyText,
    Heading,
    Image,
    BackgroundOverlay,
} from '@nerve/core/components';

import * as styled from './__styles';

export const ShowPoster: React.FC<ShowPosterProps> = ({
    title,
    slug,
    authorName,
    image,
    season,
}) => {
    /**
     * Todo: 1. Use performance date range to extract a "prettified" version of the dates. Ex. April 23-28, 2019
     * Todo: 2, Turn date extraction methodology into custom hook
     */

    return (
        <styled.ShowPoster>
            <Link className="wrapper" to={getShowSlug(slug, season.slug)}>
                <Image
                    fluid={image.asset.fluid}
                    alt={image.alt}
                    className="image"
                />
                <BackgroundOverlay
                    variant="verticalGradientDark"
                    className="overlay"
                />

                <div className="content">
                    <Heading className="title" size="xs" color="light" as="h2">
                        {title}
                    </Heading>
                    <BodyText
                        className="author"
                        size="m"
                        color="light"
                        weight="bold"
                    >
                        by {authorName}
                    </BodyText>
                    <BodyText className="season" size="s" color="medium">
                        {season.title}
                    </BodyText>
                </div>
            </Link>
        </styled.ShowPoster>
    );
};

export interface ShowPosterProps {
    title: string;
    slug: string;
    authorName: string;
    season: {
        slug: string;
        title: string;
    };
    image: SanityFluidImage;
    openingDate: string;
    closingDate: string;
}
