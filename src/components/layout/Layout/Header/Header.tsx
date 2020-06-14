import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { LinkHandler } from '@components/utility';
import { Logo } from '@components/foundations';
import { Container } from '../../Container/Container';

import { NavBar } from './NavBar/NavBar';

import * as styled from './__styles';

export const Header = () => {
    const { prismicHeader } = useStaticQuery(graphql`
        query HeaderDataQuery {
            prismicHeader {
                data {
                    nav_links {
                        page {
                            uid
                        }
                        text
                    }
                }
            }
        }
    `);

    return (
        <styled.Header>
            <Container className="container" maxWidth="l">
                <LinkHandler to="/" className="brand">
                    <Logo type="Lockup" size="l" />
                    <h1 className="u-visually-hidden">The Nerve Theatre</h1>
                </LinkHandler>
                <NavBar menuItems={prismicHeader.data.nav_links} />
            </Container>
        </styled.Header>
    );
};
