import React from 'react';
import styled from 'styled-components';
import { breakpoints, spacing, zIndex } from '@tokens';
import whiteGrit from '@assets/grit-white.png';
import blackGrit from '@assets/grit-black.png';

import { useLinkMapContext } from '@context';
import { getChildPageSlug } from '@lib/url';

import { Container, Section } from '@components/layout';
import { Heading, Logo } from '@components/foundations';

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
        display: block;
        height: 100%;
        position: absolute;
        pointer-events: none;
        background-size: 600px;
        width: 100%;
        top: 0;
        left: 0;
        z-index: ${zIndex.front};
    }

    &:before {
        background-image: url(${blackGrit});
    }

    &:after {
        background-image: url(${whiteGrit});
    }
`;

export const RebrandSection: React.FC = () => {
    return (
        <StyledRebrandSection bgColor="light">
            <Container>
                <div className="content">
                    <Logo type="Playground" size="xl" />
                    <Heading color="dark" size="s" tag="p" className="middle">
                        is now
                    </Heading>
                    <Logo type="Lockup" size="xl" color="dark" />
                </div>
            </Container>
        </StyledRebrandSection>
    );
};
