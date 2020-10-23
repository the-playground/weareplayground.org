import React from 'react';

import { Container } from '@nerve/core/components/layout';
import { useConfigContext, useLinkMapContext } from '@context';

import { Icon } from '@nerve/core/components/foundations';

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
            icon: (
                <Icon
                    name="Facebook"
                    size="s"
                    color="medium"
                    title="Facebook icon"
                />
            ),
        },
        {
            name: 'instagram',
            link: config.instagram.url,
            icon: (
                <Icon
                    name="Instagram"
                    size="s"
                    color="medium"
                    title="Instagram icon"
                />
            ),
        },
        {
            name: 'spotify',
            link: config.spotify.url,
            icon: (
                <Icon
                    name="Spotify"
                    size="s"
                    color="medium"
                    title="Spotify icon"
                />
            ),
        },
        {
            name: 'youtube',
            link: config.youtube.url,
            icon: (
                <Icon
                    name="Youtube"
                    size="s"
                    color="medium"
                    title="Youtube icon"
                />
            ),
        },
        {
            name: 'github',
            link: config.github.url,
            icon: (
                <Icon
                    name="Github"
                    size="s"
                    color="medium"
                    title="Github icon"
                />
            ),
        },
    ];

    const menuItems = [
        // {
        //     text: 'current season',
        //     link: links.currentSeason,
        // },
        {
            text: 'the archive',
            link: links.archive,
        },
        // {
        //     text: 'about us',
        //     link: links.about,
        // },
        // {
        //     text: 'support us',
        //     link: links.supportUs,
        // },
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
