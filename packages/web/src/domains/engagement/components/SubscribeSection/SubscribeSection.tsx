import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { breakpoints, spacing } from '@nerve/core/tokens';
import { SanityImageData } from '@nerve/shared/types';

import {
    Container,
    Section,
    BodyText,
    GrittyHeading,
} from '@nerve/core/components';

import { EmailSubscribe } from '../EmailSubscribe/EmailSubscribe';

const StyledSubscribeSection = styled(Section)`
    padding: ${spacing.layout.l} 0;

    .intro-copy {
        margin-top: ${spacing.layout.xs};
        margin-bottom: ${spacing.layout.s};
    }
`;

export const SubscribeSection: React.FC = () => {
    /**
     * Query for all the configs our site might need to use for every page.
     */
    const { sanityComponentConfig } = useStaticQuery(graphql`
        query SubscribeComponentConfigQuery {
            sanityComponentConfig(_id: { eq: "componentConfig" }) {
                subscribe {
                    title
                    copy
                    image {
                        asset {
                            url
                        }
                    }
                }
            }
        }
    `);

    const { subscribe }: SubscribeComponentData = sanityComponentConfig;

    return (
        <StyledSubscribeSection overlay="dark90">
            <Container maxWidth="xs">
                <GrittyHeading
                    size="s"
                    color="dark"
                    as="h3"
                    bgColor="neutralLight"
                    offset={-2}
                    className="intro-title"
                >
                    {subscribe.title}
                </GrittyHeading>
                <BodyText color="light" size="m" className="intro-copy">
                    {subscribe.copy}
                </BodyText>
                <EmailSubscribe />
            </Container>
        </StyledSubscribeSection>
    );
};

interface SubscribeComponentData {
    subscribe: {
        title: string;
        copy: string;
    };
}
