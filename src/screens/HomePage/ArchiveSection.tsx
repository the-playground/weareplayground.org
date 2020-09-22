import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing } from '@tokens';

import { useLinkMapContext } from '@context';
import { Container } from '@components/layout';
import { Heading, BodyText, Icon } from '@components/foundations';
import { Button } from '@components/actions';

const StyledArchiveSection = styled.section`
    padding: ${spacing.layout.xl} 0;

    .title {
        margin-bottom: ${spacing.component.m};
    }

    .title > span {
        color: ${({ theme }) => theme.typography.accentDark};
    }

    .copy {
        max-width: 525px;
        margin-bottom: ${spacing.component.xxl};
    }
`;

export const ArchiveSection: React.FC<AboutSectionProps> = () => {
    const { archive } = useLinkMapContext();

    return (
        <StyledArchiveSection>
            <Container>
                <Heading color="light" size="m" tag="h2" className="title">
                    blast to the past<span>.</span>
                </Heading>
                <BodyText color="light" size="l" tag="p" className="copy">
                    check out out our show archives and discover why our brand
                    of theatre will get under your skin.
                </BodyText>
                <Button
                    color="primary"
                    size="m"
                    link={{ to: archive }}
                    className="action"
                >
                    take me there
                </Button>
            </Container>
        </StyledArchiveSection>
    );
};

interface AboutSectionProps {}
