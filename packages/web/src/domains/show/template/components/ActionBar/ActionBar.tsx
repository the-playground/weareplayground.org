import React from 'react';

import { BodyText, Container, Icon } from '@web/ui/core';
import { SocialShareModal } from '@web/domains/engagement';
import { DateRange } from '@web/shared/components';

import * as styled from './ActionBar.styles';

export const ActionBar: React.FC<IActionBar> = ({
    openDate,
    closeDate,
    url,
}) => {
    return (
        <styled.ActionBar>
            <Container className="container">
                <div className="dates">
                    <BodyText color="light" size="l" weight="bold">
                        <DateRange
                            icon={<Icon name="Calendar" size="m" />}
                            startDate={openDate}
                            endDate={closeDate}
                        />
                    </BodyText>
                </div>
                <div className="share">
                    <SocialShareModal
                        url={url}
                        shareText="Check out this show at The Nerve!"
                    />
                </div>
            </Container>
        </styled.ActionBar>
    );
};

export interface IActionBar {
    openDate: string;
    closeDate: string;
    url: string;
}
