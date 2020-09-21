import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing } from '@tokens';

import { Container } from '@components/layout';

const StyledAboutSection = styled.section``;

export const AboutSection: React.FC<AboutSectionProps> = () => {
    return (
        <StyledAboutSection>
            <Container>Data</Container>
        </StyledAboutSection>
    );
};

interface AboutSectionProps {}
