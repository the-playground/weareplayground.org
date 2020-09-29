import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing } from '@tokens';

import { Container } from '@components/layout';
import { EmailSubscribe } from '@components/ui';

const StyledSubscribeSection = styled.section`
    border-top: 1px solid ${({ theme }) => theme.palette.secondary.light};
    padding: ${spacing.layout.m};
`;

export const SubscribeSection: React.FC<SubscribeSectionProps> = () => {
    return (
        <StyledSubscribeSection>
            <Container maxWidth="s">
                <EmailSubscribe />
            </Container>
        </StyledSubscribeSection>
    );
};

interface SubscribeSectionProps {}
