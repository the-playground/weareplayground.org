import React from 'react';

import { Container } from '@components/layout';
import { useConfigContext, useLinkMapContext } from '@context';

import { Icon } from '@components/foundations';

import { Copyright } from './Copyright/Copyright';
import { FooterNav } from './FooterNav/FooterNav';
import * as styled from './__styles';

export const Footer = () => {
    const config = useConfigContext();
    const links = useLinkMapContext();

    const socialAccounts = [
        {
            name: 'facebook',
            link: config.facebook.url,
            icon: <Icon name="Facebook" size="s" color="medium" />,
        },
        {
            name: 'instagram',
            link: config.instagram.url,
            icon: <Icon name="Instagram" size="s" color="medium" />,
        },
        {
            name: 'spotify',
            link: config.spotify.url,
            icon: <Icon name="Spotify" size="s" color="medium" />,
        },
        {
            name: 'youtube',
            link: config.youtube.url,
            icon: <Icon name="Youtube" size="s" color="medium" />,
        },
        {
            name: 'github',
            link: config.github.url,
            icon: <Icon name="Github" size="s" color="medium" />,
        },
    ];

    const menuItems = [
        {
            text: 'current season',
            link: links.currentSeason,
        },
        {
            text: 'archives',
            link: links.archive,
        },
        {
            text: 'about us',
            link: links.about,
        },
        {
            text: 'support us',
            link: links.supportUs,
        },
    ];

    return (
        <styled.Footer>
            <Container className="footer-container">
                <FooterNav
                    socialAccounts={socialAccounts}
                    menuItems={menuItems}
                />
            </Container>
            <Copyright />
        </styled.Footer>
    );
};
