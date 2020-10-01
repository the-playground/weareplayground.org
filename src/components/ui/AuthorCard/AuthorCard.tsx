import React from 'react';

import { GhostButton } from '@components/actions';
import { BodyText, Icon, Image } from '@components/foundations';

import { AuthorCardProps } from './AuthorCard.d';
import * as styled from './AuthorCard.styles';

export const AuthorCard: React.FC<AuthorCardProps> = ({
    name,
    bio,
    headshot,
    instagram,
}) => {
    return (
        <styled.AuthorCard>
            {headshot && (
                <div className="media">
                    <Image fixed={headshot.fixed} alt={headshot.alt} />
                </div>
            )}
            <div className="content">
                <BodyText tag="p" size="m" color="medium" className="byline">
                    written by
                </BodyText>
                <BodyText
                    tag="p"
                    size="l"
                    weight="bold"
                    color="light"
                    className="name"
                >
                    {name}
                </BodyText>
                {bio && (
                    <BodyText tag="p" size="m" color="medium" className="bio">
                        {bio}
                    </BodyText>
                )}
            </div>
            {instagram && (
                <div className="follow">
                    <GhostButton
                        to={instagram.url}
                        color="tertiary"
                        size="s"
                        endIcon={<Icon name="Instagram" size="xs" />}
                    >
                        follow
                    </GhostButton>
                </div>
            )}
        </styled.AuthorCard>
    );
};
