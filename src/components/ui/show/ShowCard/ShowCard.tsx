import React from 'react';

import { Image, ImageProps } from '@components/foundations';
import * as Styled from './__styles';

export const ShowCard: React.FC<ShowCardProps> = ({ show, className }) => {
    // Make data simpler for us to work with by destructuring/ pulling out what we need.
    const { title, author, performances } = show;
    const { uid } = show._meta;

    // Handle the custom show-feed images
    // Handle setting fallback if needed
    // Handle desktop / tablet / mobile sources as needed
    const imageSource = show?.card_imageSharp?.childImageSharp.fluid;

    // Handle setting the current state of the show (inactive, active, in-rehearsal, now playing)
    // Consider useReducer?
    // const [status, SetStatus] = useState('inactive');

    return (
        <Styled.ShowCard className={className}>
            <Styled.ShowCardLink to={`/shows/${uid}`}>
                {imageSource ? <Image fluid={imageSource} alt="Hello" /> : ``}
            </Styled.ShowCardLink>
        </Styled.ShowCard>
    );
};

export interface ShowCardProps {
    title: string;
    author: string;
    uid: string;
    image: ImageProps;
    season: {
        title: string;
        uid: string;
    };
    className?: string;
}
