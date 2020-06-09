import React from 'react';

import { PrismicImage } from '@type/prismic';

import { getShowSlug } from '@lib/url';
import { LinkHandler } from '@components/utility';
import { BodyText, Heading, Image, ImageProps } from '@components/foundations';

import * as styled from './__styles';

export const ShowPoster: React.FC<ShowPosterProps> = ({
    title,
    author,
    uid,
    image,
    season,
}) => {
    return (
        <styled.ShowPoster>
            <LinkHandler className="wrapper" to={getShowSlug(uid, season.uid)}>
                <Image fluid={image.sharp?.fluid} alt={image.basic.alt} />
                <div className="overlay" />

                <div className="content">
                    <BodyText
                        className="title"
                        size="l"
                        color="light"
                        tag="h2"
                        weight="bold"
                    >
                        {title}
                    </BodyText>
                    <BodyText className="author" size="s" color="light" tag="p">
                        {author}
                    </BodyText>
                    <BodyText className="season" size="s" color="light" tag="p">
                        {season.title}
                    </BodyText>
                </div>
            </LinkHandler>
        </styled.ShowPoster>
    );
};

export interface ShowPosterProps {
    title: string;
    author: string;
    uid: string;
    image: {
        basic: PrismicImage;
        sharp: ImageProps;
    };
    season: {
        title: string;
        uid: string;
    };
}
