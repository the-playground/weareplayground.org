import React from 'react';
import { Helmet } from 'react-helmet';

import { GlobalSEO } from '@nerve/core/components/utility';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { StylesGlobal, FontDefinitions } from './styles';

// CSS Reset
import '@nerve/assets/reset.css';

export const Layout: React.FC<LayoutProps> = ({
    children,
    noHeader,
    noFooter,
}) => (
    <>
        <GlobalSEO />

        <StylesGlobal />
        <Helmet>
            <style>{FontDefinitions}</style>
        </Helmet>

        {noHeader ? `` : <Header />}
        <main>{children}</main>
        {noFooter ? `` : <Footer />}
    </>
);

export interface LayoutProps {
    noHeader: boolean;
    noFooter: boolean;
}
