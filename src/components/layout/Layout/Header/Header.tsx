import React from 'react';

import { LinkHandler } from '@components/utility';
import { Logo } from '@components/foundations';
import { Container } from '../../Container/Container';

import { DesktopNavBar } from './DesktopNavBar/DesktopNavBar';

import * as styled from './__styles';

export const Header = () => {
    return (
        <styled.Header>
            <Container className="container" maxWidth="l">
                <LinkHandler to="/" className="brand">
                    <Logo type="Lockup" size="l" color="inverted" />
                    <h1 className="u-visually-hidden">The Nerve Theatre</h1>
                </LinkHandler>
                <DesktopNavBar />
            </Container>
        </styled.Header>
    );
};
