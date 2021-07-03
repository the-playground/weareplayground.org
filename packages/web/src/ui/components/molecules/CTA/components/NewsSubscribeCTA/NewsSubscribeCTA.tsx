import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { breakpoints, spacing } from '@web/ui/tokens';
import { SanityImageData } from '@web/shared/types';

import { Container, Section, BodyText, GrittyHeading } from '@web/ui/core';

import { GeneralNewsSubscribe } from '../../../GeneralNewsSubscribe/GeneralNewsSubscribe';

const StyledNewsSubscribeCTA = styled(Section)`
    padding: ${spacing.layout.l} 0;

    .intro-copy {
        margin-top: ${spacing.layout.xs};
        margin-bottom: ${spacing.layout.s};
    }
`;

export const NewsSubscribeCTA: React.FC = () => {
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
                            _id
                            gatsbyImageData(
                                layout: FULL_WIDTH
                                width: 1500
                                placeholder: BLURRED
                            )
                        }
                    }
                }
            }
        }
    `);

    const { subscribe }: SubscribeComponentData = sanityComponentConfig;

    return (
        <StyledNewsSubscribeCTA
            overlay="dark65"
            bgImage={{ image: subscribe.image.asset }}
        >
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
                <GeneralNewsSubscribe />
            </Container>
        </StyledNewsSubscribeCTA>
    );
};

interface SubscribeComponentData {
    subscribe: {
        title: string;
        copy: string;
        image: SanityImageData;
    };
}
