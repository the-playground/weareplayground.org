import React from 'react';
import styled from 'styled-components';

import {
    BodyText,
    FillButton,
    GrittyHeading,
    Section,
    Container,
} from '@web/core/components';

import { spacing } from '@web/core/tokens';

const StyledSection = styled(Section)`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: ${spacing.layout.xxl} 0 ${spacing.layout.xl} 0;
    text-align: center;

    .title {
        margin-bottom: ${spacing.component.xxl};
    }
    .copy {
        max-width: 500px;
        margin-bottom: ${spacing.component.xl};
        margin-left: auto;
        margin-right: auto;
    }
`;

export const NotFoundContent: React.FC = () => {
    return (
        <StyledSection bgColor="default">
            <Container className="container">
                <GrittyHeading
                    bgColor="neutralLight"
                    color="dark"
                    size="s"
                    className="title"
                    as="h1"
                >
                    Page Not Found
                </GrittyHeading>
                <BodyText color="light" size="m" className="copy">
                    well shit. it looks like the page you were looking for
                    either doesn't exist or has been moved. Try heading back to
                    the home page and starting your journey from there. Best
                    wishes.
                </BodyText>
                <FillButton to="/" color="primary" size="m">
                    Take me home
                </FillButton>
            </Container>
        </StyledSection>
    );
};
