import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing } from '@nerve/core/tokens';

import { useLinkMapContext } from '@context';

import { Container } from '@nerve/core/components/layout';
import { Heading, BodyText, Icon } from '@nerve/core/components/foundations';
import { TextButton } from '@nerve/core/components/actions';

const StyledArchiveSection = styled.section`
    padding: ${spacing.layout.l} 0;

    ${breakpoints.m} {
        padding: ${spacing.layout.xl} 0;
    }

    .title {
        margin-bottom: ${spacing.component.m};
        ${breakpoints.m} {
            align-items: center;
            display: flex;
        }
    }

    .title > i {
        color: ${({ theme }) => theme.typography.accentDark};
        margin-right: ${spacing.component.m};
    }

    .title .period {
        color: ${({ theme }) => theme.typography.accentDark};
    }

    .copy {
        max-width: 525px;
        margin-bottom: ${spacing.component.l};
    }
`;

export const ArchiveSection: React.FC = () => {
    const { archive } = useLinkMapContext();

    return (
        <StyledArchiveSection>
            <Container>
                <Heading color="light" size="m" tag="h2" className="title">
                    <Icon
                        name="Rocket"
                        size="l"
                        responsive={{ breakpoint: 'm', size: 'm' }}
                    />
                    <span>
                        blast to the past<span className="period">.</span>
                    </span>
                </Heading>
                <BodyText color="medium" size="m" tag="p" className="copy">
                    check out out our show archives and discover why our brand
                    of theatre will get under your skin.
                </BodyText>
                <TextButton
                    color="primary"
                    size="m"
                    to={archive}
                    endIcon={<Icon name="ArrowRight" size="xs" />}
                    animateIconOnHover
                >
                    take me there
                </TextButton>
            </Container>
        </StyledArchiveSection>
    );
};
