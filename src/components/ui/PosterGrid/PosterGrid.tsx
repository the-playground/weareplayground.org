import React from 'react';

import { ShowSnippet } from '@type/show';

import { BodyText } from '@components/foundations';
import { ShowPoster } from '@components/ui';

import * as styled from './__styles';

export const PosterGrid: React.FC<PosterGridProps> = ({ items }) => {
    /**
     * Todo: 1. Sort shows based on performance dates
     * Todo: 2. Turn sorting methodology into reuseable hook
     */

    return (
        <styled.PosterGrid>
            <BodyText className="instructions" tag="p" size="m" color="medium">
                Select a show to see detailed information
            </BodyText>
            <div className="grid">
                {items.map(({ uid, data }) => {
                    const show = data;

                    return (
                        <ShowPoster
                            key={show.title}
                            title={show.title}
                            author={show.author}
                            uid={uid}
                            image={show.poster_image}
                            season={{
                                title: show.season.document.data.title,
                                uid: show.season.uid,
                            }}
                            performances={show.performances}
                        />
                    );
                })}
            </div>
        </styled.PosterGrid>
    );
};

export interface PosterGridProps {
    items: Omit<ShowSnippet, 'card_image'>[];
}
