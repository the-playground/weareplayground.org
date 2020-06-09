import React from 'react';

import { ShowPoster } from '@components/ui';

import { ShowSnippet } from '@type/show';
import * as styled from './__styles';

export const PosterGrid: React.FC<PosterGridProps> = ({ items }) => {
    return (
        <styled.PosterGrid>
            {items.map((item) => {
                const show = item.node;
                return (
                    <ShowPoster
                        title={show.title}
                        author={show.author}
                        uid={show._meta.uid}
                        image={{
                            basic: show.poster_image,
                            sharp: show.poster_imageSharp?.childImageSharp,
                        }}
                        season={{
                            title: show.season.title,
                            uid: show.season._meta.uid,
                        }}
                    />
                );
            })}
        </styled.PosterGrid>
    );
};

export interface PosterGridProps {
    items: {
        node: Omit<ShowSnippet, 'card_image' | 'card_imageSharp'>;
    }[];
}
