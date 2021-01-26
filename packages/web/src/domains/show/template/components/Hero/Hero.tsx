import React from 'react';

import { SanityFluidImage } from '@nerve/shared/types';
import { BodyText, Container, Heading } from '@nerve/core/components';
import * as styled from './Hero.styles';

export const Hero: React.FC<HeroProps> = ({
    title,
    author,
    bgImage,
    statusBar,
}) => {
    return (
        <styled.Hero bgImage={bgImage} bgColor="default">
            <Container className="container">
                {title}
                by {author}
            </Container>
            <div className="status">{statusBar}</div>
        </styled.Hero>
    );
};

interface HeroProps {
    title: string;
    author: string;
    bgImage: SanityFluidImage;
    statusBar: JSX.Element;
}
