import React from 'react';

import { useConfigContext, useLinkMapContext } from '@nerve/shared/context';

import { Container, Divider, Icon } from '@nerve/core/components';

import { Copyright } from './Copyright/Copyright';
import { FooterNav } from './FooterNav/FooterNav';
import * as styled from './__styles';

export const Footer: React.FC = () => {
    const { company } = useConfigContext();
    const links = useLinkMapContext();

    const socialAccounts = [
        {
            name: 'facebook',
            link: company.facebook,
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
            link: company.instagram,
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
            link: company.spotify,
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
            link: company.youtube,
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
            link: company.github,
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
            <Divider color="paperLight" />
            <Copyright />
        </styled.Footer>
    );
};
