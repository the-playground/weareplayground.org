import React from 'react';

import { Container, Divider } from '@web/ui/core';

import { Copyright } from './Copyright/Copyright';
import { FooterNav } from './FooterNav/FooterNav';
import * as styled from './__styles';

export const Footer: React.FC = () => {
    return (
        <styled.Footer>
            <Container className="footer-container">
                <FooterNav />
            </Container>
            <Divider color="paperLight" />
            <Copyright />
        </styled.Footer>
    );
};
