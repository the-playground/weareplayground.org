import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing } from '@tokens';

import { useLinkMapContext } from '@context';
import { Container } from '@components/layout';
import { Heading, BodyText, Icon } from '@components/foundations';
import { TextButton } from '@components/actions';

const StyledArchiveSection = styled.section`
    padding: ${spacing.layout.l} 0;

    ${breakpoints.m} {
        padding: ${spacing.layout.xl} 0;
    }

    .title {
        align-items: center;
        display: flex;
        margin-bottom: ${spacing.component.m};
    }

    .title > i {
        color: ${({ theme }) => theme.typography.accentDark};
        margin-right: ${spacing.component.m};
    }

    .title > span {
        color: ${({ theme }) => theme.typography.accentDark};
    }

    .copy {
        max-width: 525px;
        margin-bottom: ${spacing.component.l};
    }
`;

export const ArchiveSection: React.FC<AboutSectionProps> = () => {
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
                    blast to the past<span>.</span>
                </Heading>
                <BodyText color="light" size="m" tag="p" className="copy">
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

interface AboutSectionProps {}
