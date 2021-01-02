import React from 'react';

import { BodyText } from '@nerve/core/components';

import { ShowCore } from '../../types';
import { ShowPoster, ShowPosterProps } from '../ShowPoster/ShowPoster';

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
                            image={show.posterImage}
                            season={{
                                title: show.season.title,
                                slug: show.season.slug.current,
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
    items: ShowPosterProps[];
}
