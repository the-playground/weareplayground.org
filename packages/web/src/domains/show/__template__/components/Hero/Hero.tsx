import React from 'react';

import {
    BodyText,
    Container,
    Heading,
    Icon,
    List,
    ListItem,
    Modal,
    SectionProps,
} from '@web/ui/core';

import * as styled from './Hero.styles';

export const Hero: React.FC<HeroProps> = ({
    title,
    author,
    bgImage,
    actionBar,
}) => {
    return (
        <styled.Hero bgImage={bgImage} overlay="black45">
            <Container className="container">
                <Heading className="title" size="xl" color="light">
                    {title}
                </Heading>
                <BodyText
                    className="author"
                    size="xl"
                    color="light"
                    weight="bold"
                >
                    by {author}
                </BodyText>
            </Container>
            {actionBar && actionBar}
        </styled.Hero>
    );
};

interface HeroProps extends SectionProps {
    title: string;
    author: string;
    actionBar?: JSX.Element;
}
