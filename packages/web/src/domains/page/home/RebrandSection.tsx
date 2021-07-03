import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing, zIndex } from '@web/ui/tokens';
import whiteGrit from '@web/assets/grit-white.png';
import blackGrit from '@web/assets/grit-black.png';

import { Container, Heading, Logo, Section } from '@web/ui/core';

const sectionBreakpoint = breakpoints.m;

const StyledRebrandSection = styled(Section)`
    padding: ${spacing.layout.m} 0;
    position: relative;
    text-align: center;

    .content {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        ${sectionBreakpoint} {
            flex-direction: row;
        }
    }

    .content .middle {
        margin-top: ${spacing.layout.xs};
        margin-bottom: ${spacing.layout.xs};

        ${sectionBreakpoint} {
            margin-bottom: 0;
            margin-left: ${spacing.layout.m};
            margin-right: ${spacing.layout.m};
            margin-top: 0;
        }
    }

    .action {
        margin-top: ${spacing.component.xl};
    }

    &:before,
    &:after {
        content: '';
        height: 100%;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: ${zIndex.front};
    }

    &:before {
        background-size: 700px;
        background-image: url(${blackGrit});
    }

    &:after {
        background-size: 700px;
        background-image: url(${whiteGrit});
    }
`;

export const RebrandSection: React.FC = () => {
    return (
        <StyledRebrandSection bgColor="neutralLight">
            <Container>
                <div className="content">
                    <Logo type="Playground" size="xl" />
                    <Heading color="dark" size="s" className="middle">
                        is now
                    </Heading>
                    <Logo type="Lockup" size="xl" color="dark" />
                </div>
            </Container>
        </StyledRebrandSection>
    );
};
