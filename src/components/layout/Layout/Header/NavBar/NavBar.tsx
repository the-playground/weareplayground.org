import React from 'react';

import { useLinkMapContext } from '@context';

import { LinkHandler } from '@components/utility';
import { Button } from '@components/actions';
import { BodyText } from '@components/foundations';

import * as styled from './__styles';

const LinkItem: React.FC<{ slug: string; text: string }> = ({ slug, text }) => (
    <li>
        <LinkHandler to={slug} activeClassName="--is-active">
            <BodyText tag="span" size="m" weight="bold" color="light">
                {text}
            </BodyText>
        </LinkHandler>
    </li>
);

export const NavBar: React.FC = () => {
    const {
        currentSeason,
        archive,
        about,
        contact,
        supportUs,
    } = useLinkMapContext();

    return (
        <styled.NavBar aria-labelledby="mainmenulabel">
            <p id="mainmenulabel" className="u-visually-hidden">
                Main Menu
            </p>
            <ul>
                {currentSeason && (
                    <LinkItem
                        slug={currentSeason}
                        text="current season"
                        key="currentSeason"
                    />
                )}

                <LinkItem slug={archive} text="archive" key="archive" />
                <LinkItem slug={about} text="about" key="about" />
                <LinkItem slug={contact} text="connect" key="connect" />
                <li className="highlight">
                    <Button
                        size="s"
                        type="primary"
                        link={{ to: supportUs }}
                        key="support us"
                        className="button"
                    >
                        support us
                    </Button>
                </li>
            </ul>
        </styled.NavBar>
    );
};
