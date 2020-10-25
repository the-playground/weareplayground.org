import React from 'react';

import { BodyText, Container, Heading } from '@nerve/core/components';

import * as styled from './__styles';

export const SimpleHero: React.FC<SimpleHeroProps> = ({ title, subTitle }) => (
    <styled.SimpleHero>
        <Container>
            <Heading color="light" tag="h1" size="l" className="title">
                {title}
            </Heading>
            <BodyText color="light" tag="p" size="xl" className="sub-title">
                {subTitle}
            </BodyText>
        </Container>
    </styled.SimpleHero>
);

interface SimpleHeroProps {
    title: string;
    subTitle: string;
}
