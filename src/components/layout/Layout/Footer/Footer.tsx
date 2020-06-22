import React from 'react';

import { Container } from '@components/layout';
import { useConfigContext, useLinkMapContext } from '@context';

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
        },
        {
            name: 'instagram',
            link: config.instagram.url,
        },
        {
            name: 'spotify',
            link: config.spotify.url,
        },
        {
            name: 'youtube',
            link: config.youtube.url,
        },
    ];

    const menuItems = [
        {
            text: 'current season',
            link: links.currentSeason,
        },
        {
            text: 'archive',
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
