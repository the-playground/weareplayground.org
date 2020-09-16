import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing } from '@tokens';

import { Container } from '@components/layout';

const StyledRebrandSection = styled.section``;

export const RebrandSection: React.FC<RebrandSectionProps> = () => {
    return (
        <StyledRebrandSection>
            <Container>Data</Container>
        </StyledRebrandSection>
    );
};

interface RebrandSectionProps {}
