import React from 'react';
import styled from 'styled-components';

import {
    Heading,
    BodyText,
    Card,
    CardHeader,
    CardContent,
    Section,
    Container,
    Divider,
} from '@web/ui/core';
import { breakpoints, grid, spacing } from '@web/ui/tokens';
import { DonateForm } from '@web/ui/molecules';

const StyledDonateSection = styled(Section)`
    padding: ${spacing.layout.m} 0;

    .container {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
    }

    .copy,
    .form {
        flex: 1;
    }

    .form {
        height: 100%;
        max-width: 100%;
        margin: 0;
    }
`;

export const DonateSection = () => (
    <StyledDonateSection bgColor="neutralLight">
        <Container className="container">
            <Card
                bgColor="paper"
                borderColor="paperLight"
                spacing="l"
                variant="outlined"
                className="copy"
            >
                <CardHeader>
                    <BodyText color="light" weight="bold" size="l">
                        It takes a fuckin’ village y’all
                    </BodyText>
                </CardHeader>
                <Divider color="paperLight" />
                <CardContent>
                    <BodyText color="light" size="m">
                        With your generous support, we can put more money in an
                        artist’s pocket, keep creating our brand of raw, real
                        and relevant theatre, and build the kind of artistic
                        community that Dayton deserves. Do you have{' '}
                        <BodyText
                            as="span"
                            color="accent"
                            weight="bold"
                            size="m"
                        >
                            NERVE?{' '}
                        </BodyText>
                        Become a donor today.
                    </BodyText>
                </CardContent>
            </Card>
            <DonateForm campaignID="grassroots-support-fund" className="form" />
        </Container>
    </StyledDonateSection>
);