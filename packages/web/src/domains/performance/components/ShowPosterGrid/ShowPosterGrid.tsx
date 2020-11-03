import React from 'react';

import { BodyText } from '@nerve/core/components';
import { ShowSnippet } from '../../index.d';

import { ShowPoster } from '../ShowPoster/ShowPoster';

import * as styled from './__styles';

export const ShowPosterGrid: React.FC<ShowPosterGridProps> = ({ items }) => {
    /**
     * Todo: 1. Sort shows based on performance dates
     * Todo: 2. Turn sorting methodology into reuseable hook
     */

    return (
        <styled.ShowPosterGrid>
            <BodyText className="instructions" size="m" color="medium">
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
        </styled.ShowPosterGrid>
    );
};

export interface ShowPosterGridProps {
    items: Omit<ShowSnippet, 'card_image'>[];
}
