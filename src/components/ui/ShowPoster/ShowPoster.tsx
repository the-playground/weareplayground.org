import React from 'react';

import { Performance } from '@type/show';
import { getShowSlug } from '@lib/url';
import { Link } from '@components/utility';
import {
    BodyText,
    Heading,
    Image,
    BackgroundOverlay,
    FluidImageProps,
} from '@components/foundations';

import * as styled from './__styles';

export const ShowPoster: React.FC<ShowPosterProps> = ({
    title,
    author,
    uid,
    image,
    season,
    performances,
}) => {
    /**
     * Todo: 1. Use performance date range to extract a "prettified" version of the dates. Ex. April 23-28, 2019
     * Todo: 2, Turn date extraction methodology into custom hook
     */

    return (
        <styled.ShowPoster>
            <Link className="wrapper" to={getShowSlug(uid, season.uid)}>
                <Image fluid={image.fluid} alt={image.alt} className="image" />
                <BackgroundOverlay
                    variant="verticalGradientDark"
                    className="overlay"
                />

                <div className="content">
                    <Heading className="title" size="xs" color="light" tag="h2">
                        {title}
                    </Heading>
                    <BodyText
                        className="author"
                        size="m"
                        color="light"
                        tag="p"
                        weight="bold"
                    >
                        by {author}
                    </BodyText>
                    <BodyText className="season" size="s" color="light" tag="p">
                        {season.title}
                    </BodyText>
                </div>
            </Link>
        </styled.ShowPoster>
    );
};

export interface ShowPosterProps {
    title: string;
    author: string;
    uid: string;
    image: FluidImageProps;
    season: {
        title: string;
        uid: string;
    };
    performances: Pick<Performance, 'datetime'>[];
}
