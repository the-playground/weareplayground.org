import React from 'react';
import styled from 'styled-components';

import {
    Heading,
    BodyText,
    List,
    ListItem,
    Section,
    Container,
    Icon,
} from '@web/ui/core';
import { breakpoints, grid, spacing } from '@web/ui/tokens';
import { DonateForm } from '@web/ui/molecules';

const sectionBreakpoint = breakpoints.m;

const StyledDonateSection = styled(Section)`
    padding: ${spacing.layout.l} 0;

    .container {
        align-items: flex-start;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        ${sectionBreakpoint} {
            flex-direction: row;
        }
    }

    .content,
    .form {
        flex: 1;
    }

    .form {
        height: 100%;
        max-width: 100%;
        margin: 0;
    }

    .content {
        margin-bottom: ${spacing.layout.m};
        ${sectionBreakpoint} {
            margin-bottom: 0;
        }
    }

    .content .title {
        margin-bottom: ${spacing.component.l};
    }

    .content .cta {
        margin-top: ${spacing.component.m};
    }

    .content .donation-levels-list {
        margin-bottom: ${spacing.component.l};
        margin-top: ${spacing.component.m};
    }
`;

const donationLevels = [
    <>
        <strong>$25</strong> will pay for a script for 2 team members.
    </>,
    <>
        <strong>$75</strong> will cover the cost of renting a single light for 1
        week.
    </>,
    <>
        <strong>$150</strong> will cover the cost of rights for one performance.
    </>,
    <>
        <strong>$250</strong> will go towards paying an artist's stipend.
    </>,
];

export const DonateSection = () => (
    <StyledDonateSection bgColor="default">
        <Container className="container" maxWidth="l">
            <div className="content">
                <div className="title">
                    <Heading color="light" size="xs">
                        Your kindness and generosity can make this future a
                        reality.
                    </Heading>
                </div>
                <div className="copy">
                    <BodyText color="medium" size="m">
                        With your support, we can put more money in local
                        artists' pockets, keep creating our brand of raw, real,
                        and relevant theatre, and build the kind of artistic
                        community that Dayton deserves.
                    </BodyText>
                    <List
                        itemSpacing="xs"
                        className="donation-levels-list"
                        heading={
                            <BodyText color="light" size="m" weight="bold">
                                See the difference you can make:
                            </BodyText>
                        }
                    >
                        {donationLevels.map((text) => (
                            <ListItem>
                                <Icon
                                    name="CircleRight"
                                    size="xs"
                                    color="light"
                                />
                                <BodyText size="m" color="medium">
                                    {text}
                                </BodyText>
                            </ListItem>
                        ))}
                    </List>
                    <BodyText
                        color="accent"
                        size="m"
                        weight="bold"
                        className="cta"
                    >
                        Do you have the nerve? Become a donor.
                    </BodyText>
                </div>
            </div>
            <DonateForm campaignID="grassroots-support-fund" className="form" />
        </Container>
    </StyledDonateSection>
);
