import React from 'react';
import styled from 'styled-components';

import { breakpoints, grid, spacing } from '@tokens';

import { Container, Section, SectionProps } from '@components/layout';
import { Heading, BodyText } from '@components/foundations';

const StyledHeroSection = styled(Section)`
    padding: ${spacing.layout.xxl} 0 ${spacing.layout.xxl} 0;

    .title {
        margin-bottom: ${spacing.component.xl};
        max-width: ${grid.m};
    }
    .copy {
        max-width: ${grid.xs};
    }
`;

export const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    copy,
    bgImage,
}) => {
    return (
        <StyledHeroSection
            bgColor="extraDark"
            bgImage={bgImage}
            bgPosition="center center"
            overlay="verticalGradientDark"
        >
            <Container>
                <Heading
                    tag="h1"
                    color="light"
                    size="xl"
                    className="title"
                    textTransform="lowercase"
                >
                    {title}
                </Heading>
                <BodyText tag="p" color="light" size="l" className="copy">
                    {copy}
                </BodyText>
            </Container>
        </StyledHeroSection>
    );
};

interface HeroSectionProps extends SectionProps {
    title: string;
    copy: string;
}
