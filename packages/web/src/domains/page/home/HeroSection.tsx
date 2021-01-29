import React from 'react';
import styled from 'styled-components';

import { breakpoints, grid, spacing } from '@nerve/core/tokens';

import { useConfigContext } from '@nerve/shared/context';

import {
    BodyText,
    Container,
    FillButton,
    GrittyHeading,
    Icon,
    SectionWithBG,
    SectionWithBGProps,
} from '@nerve/core/components';

const StyledHeroSection = styled(SectionWithBG)`
    padding: ${spacing.layout.l} 0 ${spacing.layout.xl} 0;
    ${breakpoints.m} {
        padding: ${spacing.layout.xxl} 0 ${spacing.layout.xxl} 0;
    }

    .title {
        margin-bottom: ${spacing.component.xl};
        max-width: ${grid.m};
    }
    .copy {
        margin-top: ${spacing.layout.m};
        max-width: ${grid.xs};
    }

    .action {
        margin-top: ${spacing.component.xxl};
    }
`;

export const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    copy,
    bgImage,
    rebrandLink,
    rebrandLinkText,
}) => {
    const { links } = useConfigContext();
    const blogLink = links.getPost(rebrandLink);

    return (
        <StyledHeroSection
            bgImage={bgImage}
            bgPosition="center center"
            overlay="dark85"
        >
            <Container>
                <GrittyHeading
                    as="h1"
                    bgColor="neutralLight"
                    color="dark"
                    size="l"
                    className="title"
                >
                    {title}
                </GrittyHeading>
                <BodyText color="light" size="l" className="copy">
                    {copy}
                </BodyText>
                <FillButton
                    to={blogLink}
                    color="primary"
                    size="m"
                    className="action"
                    endIcon={<Icon name="ArrowRight" size="xs" />}
                    animateIconOnHover
                    animateOnClick
                >
                    {rebrandLinkText}
                </FillButton>
            </Container>
        </StyledHeroSection>
    );
};

interface HeroSectionProps extends SectionWithBGProps {
    title: string;
    copy: string;
    rebrandLinkText: string;
    rebrandLink: string;
}
