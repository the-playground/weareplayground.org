import React from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';

import {
    Avatar,
    BodyText,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Container,
    Divider,
    Heading,
    Icon,
    List,
    ListItem,
    Section,
    FillButton,
    OutlineButton,
    GhostButton,
} from '@nerve/core/components';
import { breakpoints, grid, spacing } from '@nerve/core/tokens';

import { SocialShareModal } from '@nerve/domains/engagement';

// STYLES
const StyledAlternateGivingSection = styled(Section)`
    padding: ${spacing.layout.l} 0;

    .intro > .heading {
        margin-bottom: ${spacing.component.l};
    }

    .intro > .copy {
        max-width: 550px;
    }

    .community-giving {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-gap: ${spacing.component.xxxl};
        margin-top: ${spacing.layout.m};
        margin-bottom: ${spacing.layout.m};
    }

    .share {
        max-width: 650px;
        margin: 0 auto;
    }
`;

// CONFIG
const amazonSmile = {
    title: 'Amazon Smile',
    subtitle: 'You shop, we earn $$',
    url: 'https://smile.amazon.com/',
    buttonText: 'Get Started Now',
    steps: [
        <>Sign into smile.amazon.com</>,
        <>
            Go to <strong>Your Account</strong> and select the option to{' '}
            <strong>Change your charity</strong>
        </>,
        <>
            Select <strong>The Nerve Theatre Inc.</strong>
        </>,
    ],
};

const krogerRewards = {
    title: 'Kroger Community Rewards',
    subtitle: 'You get groceries, we get $$',
    url: 'https://smile.amazon.com/',
    buttonText: 'Get Started Now',
    steps: [
        <>Sign into smile.amazon.com</>,
        <>
            Go to <strong>Your Account</strong> and select the option to{' '}
            <strong>Change your charity</strong>
        </>,
        <>
            Select <strong>The Nerve Theatre Inc.</strong>
        </>,
    ],
};

export const AlternateGivingSection = () => {
    const { href } = useLocation();

    return (
        <>
            <Divider color="paperLight" />
            <StyledAlternateGivingSection>
                <Container>
                    <div className="intro">
                        <Heading size="s" color="light" className="heading">
                            Short on cash?
                        </Heading>
                        <BodyText color="light" size="m" className="copy">
                            Ooof. We've been there. Here are 3 other ways you
                            can support us that cost you literally $0 and only a
                            few minutes of your time.
                        </BodyText>
                    </div>

                    <div className="community-giving">
                        {/* Amazon Smile */}
                        <Card
                            layout="stacked"
                            bgColor="paper"
                            variant="outlined"
                            borderColor="paperLight"
                            spacing="l"
                        >
                            <CardHeader
                                avatar={
                                    <Avatar borderColor="neutral">1</Avatar>
                                }
                            >
                                <BodyText weight="bold" color="light" size="l">
                                    {amazonSmile.title}
                                </BodyText>
                                <BodyText size="m" color="medium">
                                    {amazonSmile.subtitle}
                                </BodyText>
                            </CardHeader>
                            <Divider color="paperLight" />
                            <CardContent>
                                <List itemSpacing="xs">
                                    {amazonSmile.steps.map((text) => (
                                        <ListItem>
                                            <Icon
                                                name="Checkmark"
                                                size="xs"
                                                color="accent"
                                            />
                                            <BodyText size="m" color="medium">
                                                {text}
                                            </BodyText>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                            <CardActions>
                                <GhostButton
                                    size="s"
                                    to={amazonSmile.url}
                                    color="primary"
                                >
                                    {amazonSmile.buttonText}
                                </GhostButton>
                            </CardActions>
                        </Card>

                        {/* Kroger Community Rewards */}
                        <Card
                            layout="stacked"
                            bgColor="paper"
                            variant="outlined"
                            borderColor="paperLight"
                            spacing="l"
                        >
                            <CardHeader
                                avatar={
                                    <Avatar borderColor="neutral">2</Avatar>
                                }
                            >
                                <BodyText weight="bold" color="light" size="l">
                                    {krogerRewards.title}
                                </BodyText>
                                <BodyText size="m" color="medium">
                                    {krogerRewards.subtitle}
                                </BodyText>
                            </CardHeader>
                            <Divider color="paperLight" />
                            <CardContent>
                                <List itemSpacing="xs">
                                    {krogerRewards.steps.map((text) => (
                                        <ListItem>
                                            <Icon
                                                name="Checkmark"
                                                size="xs"
                                                color="accent"
                                            />
                                            <BodyText size="m" color="medium">
                                                {text}
                                            </BodyText>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                            <CardActions>
                                <GhostButton
                                    size="s"
                                    to={krogerRewards.url}
                                    color="primary"
                                >
                                    {krogerRewards.buttonText}
                                </GhostButton>
                            </CardActions>
                        </Card>
                    </div>

                    {/* Share with your friends */}
                    <div className="share">
                        <Card layout="stacked" spacing="l" bgColor="default">
                            <CardHeader
                                avatar={
                                    <Avatar borderColor="neutral">3</Avatar>
                                }
                            >
                                <BodyText weight="bold" color="light" size="l">
                                    Tell your friends about us
                                </BodyText>
                                <BodyText size="m" color="medium">
                                    Say something cool
                                </BodyText>
                            </CardHeader>
                            <CardContent verticalSpacing="s">
                                <BodyText size="m" color="light">
                                    I vomit in the bed in the middle of the
                                    night sit on human they not getting up ever
                                    and unwrap toilet paper ooooh feather moving
                                    feather!
                                </BodyText>
                            </CardContent>
                            <CardActions>
                                <SocialShareModal
                                    socialShareText="Tell your friends"
                                    shareButtonText="Help spread the word"
                                    shareURL={href}
                                />
                            </CardActions>
                        </Card>
                    </div>
                </Container>
            </StyledAlternateGivingSection>
        </>
    );
};
