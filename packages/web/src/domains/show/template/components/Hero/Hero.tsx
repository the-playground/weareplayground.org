import React from 'react';

import {
    BodyText,
    Container,
    Heading,
    SectionWithBGProps,
} from '@nerve/core/components';
import * as styled from './Hero.styles';

export const Hero: React.FC<HeroProps> = ({
    title,
    author,
    bgImage,
    statusBar,
}) => {
    return (
        <styled.Hero bgImage={bgImage}>
            <Container className="container">
                <Heading size="xl" color="light">
                    {title}
                </Heading>
                <BodyText size="xl" color="light" weight="bold">
                    by {author}
                </BodyText>
            </Container>
            {statusBar && <div className="status">{statusBar}</div>}
        </styled.Hero>
    );
};

interface HeroProps extends SectionWithBGProps {
    title: string;
    author: string;
    statusBar?: JSX.Element;
}
