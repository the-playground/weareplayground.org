import React from 'react';

import { ShowPoster } from '@components/ui';

import { ShowSnippet } from '@type/show';
import * as styled from './__styles';

export const PosterGrid: React.FC<PosterGridProps> = ({ items }) => {
    /**
     * Todo: 1. Sort shows based on performance dates
     * Todo: 2. Turn sorting methodology into reuseable hook
     */

    return (
        <styled.PosterGrid>
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
                    />
                );
            })}
        </styled.PosterGrid>
    );
};

export interface PosterGridProps {
    items: Omit<ShowSnippet, 'card_image'>[];
}
