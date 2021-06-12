import React from 'react';

import { BodyText, GhostButton, Icon, Image } from '@nerve/core/components';

import { AuthorCardProps } from './AuthorCard.d';
import * as styled from './AuthorCard.styles';

export const AuthorCard: React.FC<AuthorCardProps> = ({
    name,
    brief,
    avatar,
    instagram,
}) => {
    return (
        <styled.AuthorCard>
            {avatar && <div className="avatar">{avatar}</div>}
            <div className="content">
                <BodyText size="m" color="medium" className="byline">
                    written by
                </BodyText>
                <BodyText size="l" weight="bold" color="light" className="name">
                    {name}
                </BodyText>
                {brief && (
                    <BodyText size="m" color="medium" className="brief">
                        {brief}
                    </BodyText>
                )}
            </div>
            {instagram && (
                <div className="follow">
                    <GhostButton
                        to={instagram}
                        color="tertiary"
                        size="s"
                        endIcon={<Icon name="Instagram" size="xs" />}
                        animateOnClick
                    >
                        follow
                    </GhostButton>
                </div>
            )}
        </styled.AuthorCard>
    );
};
