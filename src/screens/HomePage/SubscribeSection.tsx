import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing } from '@tokens';

import { Container } from '@components/layout';
import { SubscribeBar } from '@components/ui';

const StyledSubscribeSection = styled.section``;

export const SubscribeSection: React.FC<SubscribeSectionProps> = () => {
    return (
        <StyledSubscribeSection>
            <Container>
                <SubscribeBar />
            </Container>
        </StyledSubscribeSection>
    );
};

interface SubscribeSectionProps {}
