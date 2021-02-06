import React from 'react';

import { useOverlay } from '@nerve/shared/hooks';

import {
    BodyText,
    OutlineButton,
    Container,
    Heading,
    Icon,
    List,
    ListItem,
    Modal,
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
    const [isShareOpen, setIsShareOpen, toggleShare] = useOverlay();

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
                <Container className="container">
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
                    <div className="share">
                        <OutlineButton
                            size="s"
                            onClick={toggleShare}
                            color="tertiary"
                            endIcon={<Icon name="Share" size="s" />}
                            animateOnClick
                        >
                            Share
                        </OutlineButton>
                        <Modal
                            title="Social Share"
                            isOpen={isShareOpen}
                            onCloseHandler={setIsShareOpen}
                        >
                            <List>
                                <ListItem>Item</ListItem>
                            </List>
                        </Modal>
                    </div>
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
    url: string;
}
