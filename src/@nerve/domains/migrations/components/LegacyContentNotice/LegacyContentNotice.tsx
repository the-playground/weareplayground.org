import React from 'react';

import {
    BodyText,
    Container,
    FillButton,
    Heading,
} from '@nerve/core/components';

import * as styled from './__styles';

export const LegacyContentNotice: React.FC<LegacyContentNoticeProps> = ({
    title,
    subTitle,
    contentType,
    legacyURL,
    legacyURLText,
}) => {
    return (
        <styled.LegacyContentNotice>
            <Container maxWidth="s" className="content">
                <BodyText
                    color="medium"
                    size="m"
                    tag="p"
                    className="progress-text"
                    weight="bold"
                >
                    page construction in progress...
                </BodyText>

                <Heading color="light" size="m" tag="h2" className="title">
                    {title}
                </Heading>

                {subTitle && (
                    <BodyText
                        color="light"
                        size="l"
                        tag="p"
                        weight="bold"
                        className="sub-title"
                    >
                        {subTitle}
                    </BodyText>
                )}

                <div className="divider" />

                <BodyText color="light" size="m" tag="p" className="copy">
                    We are currently in the process of moving content for this{' '}
                    {contentType} over from the Playground website as part of
                    our rebrand. Until that process is complete, you can find
                    more information about this {contentType} at the old site.
                    And don't forget to subscribe to our newsletter to stay up
                    to date with what we're up to!
                </BodyText>

                <FillButton
                    color="tertiary"
                    size="s"
                    to={legacyURL}
                    className="action"
                >
                    {legacyURLText}
                </FillButton>

                {/* Subscribe feature here */}
            </Container>
        </styled.LegacyContentNotice>
    );
};

interface LegacyContentNoticeProps {
    title: string;
    subTitle: string;
    contentType: string;
    legacyURL: string;
    legacyURLText: string;
}
