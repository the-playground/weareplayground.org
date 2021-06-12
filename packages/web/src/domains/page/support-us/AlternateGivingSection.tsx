import React from 'react';
import styled from 'styled-components';

import {
    BodyText,
    Card,
    Container,
    Divider,
    Heading,
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
        max-width: 500px;
    }

    .free-giving {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: ${spacing.component.xxxl};
        margin-top: ${spacing.layout.m};
    }
`;

export const AlternateGivingSection = () => {
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
                            Here are 3 other ways you can support us that cost
                            you literally $0 and only a few minutes of your
                            time.
                        </BodyText>
                    </div>
                    <div className="free-giving">
                        <Card
                            layout="stacked"
                            bgColor="paper"
                            variant="outlined"
                            borderColor="paperDark"
                            gutter="m"
                        >
                            Hello Card
                        </Card>
                        <Card
                            layout="stacked"
                            bgColor="paper"
                            variant="outlined"
                            borderColor="paperDark"
                            gutter="m"
                        >
                            Hello Card
                        </Card>
                    </div>
                </Container>
            </StyledAlternateGivingSection>
        </>
    );
};
