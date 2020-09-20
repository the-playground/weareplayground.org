import React from 'react';
import styled from 'styled-components';

import { breakpoints, grid, spacing } from '@tokens';

import { Container, Section, SectionProps } from '@components/layout';
import { BodyText } from '@components/foundations';
import { TitleBlock } from '@components/ui';

const StyledHeroSection = styled(Section)`
    padding: ${spacing.layout.xxl} 0 ${spacing.layout.xxl} 0;

    .title {
        margin-bottom: ${spacing.component.xl};
        max-width: ${grid.m};
    }
    .copy {
        margin-top: ${spacing.layout.m};
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
            overlay="secondary75"
        >
            <Container>
                <TitleBlock
                    tag="h1"
                    bgColor="light"
                    color="dark"
                    size="l"
                    className="title"
                >
                    {title}
                </TitleBlock>
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
