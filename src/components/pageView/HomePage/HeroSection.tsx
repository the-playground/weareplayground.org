import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { breakpoints, spacing } from '@tokens';

import { Container } from '@components/layout';

const StyledHeroSection = styled.section``;

export const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <StyledHeroSection>
            <Container>Data</Container>
        </StyledHeroSection>
    );
};

interface HeroSectionProps {}
