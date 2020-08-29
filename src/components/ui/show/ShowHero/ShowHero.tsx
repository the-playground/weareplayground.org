import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { LocalFileImageProps } from '@components/foundations';

import * as styled from './__styles';

export const ShowHero: React.FC<ShowHeroProps> = ({ image }) => {
    return (
        <styled.ShowHero>
            <div className="background">
                <div className="overlay" />
                <BackgroundImage
                    className="image"
                    fluid={image.localFile.childImageSharp.fluid}
                />
            </div>
        </styled.ShowHero>
    );
};

interface ShowHeroProps {
    image: LocalFileImageProps;
}
