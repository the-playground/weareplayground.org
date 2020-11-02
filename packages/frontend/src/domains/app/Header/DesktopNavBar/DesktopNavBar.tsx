import React from 'react';

import { useLinkMapContext } from '@nerve/shared/context';

import { Link } from '@nerve/core/routing';
import { BodyText, FillButton } from '@nerve/core/components';

import * as styled from './__styles';

const LinkItem: React.FC<{ slug: string; text: string }> = ({ slug, text }) => (
    <li>
        <Link to={slug} activeClassName="--is-active">
            <BodyText as="span" size="m" weight="bold" color="light">
                {text}
            </BodyText>
        </Link>
    </li>
);

export const DesktopNavBar: React.FC = () => {
    const {
        currentSeason,
        archive,
        about,
        contact,
        supportUs,
    } = useLinkMapContext();

    return (
        <styled.DesktopNavBar
            aria-labelledby="mainmenulabel"
            data-nav-scope="desktop"
        >
            <p id="mainmenulabel" className="u-visually-hidden">
                Main Menu
            </p>
            <ul>
                {/* {currentSeason && (
                    <LinkItem
                        slug={currentSeason}
                        text="current season"
                        key="currentSeason"
                    />
                )} */}

                <LinkItem slug={archive} text="the archive" key="archive" />
                {/* <LinkItem slug={about} text="about" key="about" />
                <LinkItem slug={contact} text="connect" key="connect" />
                <li className="highlight">
                    <FillButton
                        size="s"
                        color="primary"
                        to={supportUs}
                        key="support us"
                        className="button"
                        animateOnClick
                    >
                        support us
                    </FillButton>
                </li> */}
            </ul>
        </styled.DesktopNavBar>
    );
};
