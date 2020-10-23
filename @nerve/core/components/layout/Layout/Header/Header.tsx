import React from 'react';

import { Link } from '@nerve/core/components/utility';
import { Logo } from '@nerve/core/components/foundations';
import { Container } from '../../Container/Container';

import { DesktopNavBar } from './DesktopNavBar/DesktopNavBar';

import { HeaderProps } from './__types';
import * as styled from './__styles';

export const Header: React.FC<HeaderProps> = () => {
    return (
        <styled.Header>
            <Container className="container" maxWidth="l">
                <Link to="/" className="brand" activeClassName="--is-active">
                    <Logo
                        type="Lockup"
                        size="l"
                        color="light"
                        responsive={{ size: 'm', breakpoint: 'm' }}
                    />
                    <h1 className="u-visually-hidden">The Nerve Theatre</h1>
                </Link>
                <DesktopNavBar />
            </Container>
        </styled.Header>
    );
};

export * from './__types';
