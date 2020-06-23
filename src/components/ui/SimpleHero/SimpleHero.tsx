import React from 'react';

import { Container } from '@components/layout';
import { BodyText, Heading } from '@components/foundations';

import * as styled from './__styles';

export const SimpleHero: React.FC<SimpleHero> = ({ title, subTitle }) => (
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

interface SimpleHero {
    title: string;
    subTitle: string;
}
