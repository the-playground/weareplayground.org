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
} from '@nerve/core/components';
import { breakpoints, grid, spacing } from '@nerve/core/tokens';

import { SocialShareModal } from '@nerve/domains/engagement';

const StyledAlternateGivingSection = styled(Section)`
    padding: ${spacing.layout.l} 0;

    .intro > .heading {
        margin-bottom: ${spacing.component.l};
    }

    .intro > .copy {
        max-width: 550px;
    }

    .free-giving {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: ${spacing.component.xxxl};
        margin-top: ${spacing.layout.m};
        margin-bottom: ${spacing.layout.m};
    }

    .share {
        max-width: 650px;
        margin: 0 auto;
    }
`;

const amazonSmileSteps = [
    'Sign into smile.amazon.com',
    'Go to "Your Account" and select the option to "Change your charity"',
    'Select "The Nerve"',
];

const krogerCommunityRewardsSteps = [
    {
        text: '',
    },
];

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
                    <div className="free-giving">
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
                                    Amazon Smile
                                </BodyText>
                                <BodyText size="m" color="medium">
                                    You shop, we earn $$
                                </BodyText>
                            </CardHeader>
                            <CardContent>
                                <List itemSpacing="xs">
                                    {amazonSmileSteps.map((text) => (
                                        <ListItem>
                                            <Icon
                                                name="CircleRight"
                                                size="s"
                                                color="accent"
                                            />
                                            <BodyText size="m" color="light">
                                                {text}
                                            </BodyText>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
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
                                    Kroger Community Rewards
                                </BodyText>
                                <BodyText size="m" color="medium">
                                    You get groceries, we get $$
                                </BodyText>
                            </CardHeader>
                            <CardContent>Hello Card Content</CardContent>
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
                                    buttonText="help spread the word"
                                    url={href}
                                />
                            </CardActions>
                        </Card>
                    </div>
                </Container>
            </StyledAlternateGivingSection>
        </>
    );
};
