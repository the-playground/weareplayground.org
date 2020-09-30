import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing } from '@tokens';

import { Container } from '@components/layout';
import { BodyText, Heading, GrittyHeading } from '@components/foundations';

import { EmailSubscribe } from '../EmailSubscribe/EmailSubscribe';

const StyledSubscribeSection = styled.section`
    border-top: 1px solid ${({ theme }) => theme.palette.secondary.light};
    padding: ${spacing.layout.l} 0;

    .intro-copy {
        margin-top: ${spacing.layout.xs};
        margin-bottom: ${spacing.layout.s};
    }
`;

export const SubscribeSection: React.FC = () => {
    return (
        <StyledSubscribeSection>
            <Container maxWidth="xs">
                <GrittyHeading
                    size="xs"
                    color="dark"
                    tag="h3"
                    bgColor="light"
                    offset={-2}
                    className="intro-title"
                >
                    Subscribe for updates
                </GrittyHeading>
                <BodyText
                    tag="p"
                    color="medium"
                    size="m"
                    className="intro-copy"
                >
                    drop us your email below to stay up-to-date with all the
                    cool shit we've got going on. We promise not to spam you!
                </BodyText>
                <EmailSubscribe />
            </Container>
        </StyledSubscribeSection>
    );
};
