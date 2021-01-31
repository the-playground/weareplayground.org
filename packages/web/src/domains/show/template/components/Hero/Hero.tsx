import React from 'react';

import {
    BodyText,
    Container,
    Heading,
    Icon,
    SectionWithBGProps,
} from '@nerve/core/components';
import { DateRange } from '@nerve/shared/components';
import * as styled from './Hero.styles';

export const Hero: React.FC<HeroProps> = ({
    title,
    author,
    bgImage,
    openDate,
    closeDate,
    status,
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
            <div className="actions">
                <Container>
                    <div className="dates">
                        <BodyText color="light" size="l" weight="bold">
                            <DateRange
                                icon={<Icon name="Calendar" size="m" />}
                                startDate={openDate}
                                endDate={closeDate}
                            />
                        </BodyText>
                    </div>
                    <div className="status" />
                    <div className="tickets" />
                    <div className="share" />
                </Container>
            </div>
        </styled.Hero>
    );
};

interface HeroProps extends SectionWithBGProps {
    title: string;
    author: string;
    openDate: string;
    closeDate: string;
    status: string;
}
