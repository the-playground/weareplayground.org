import React from 'react';
import { Helmet } from 'react-helmet';

import { GlobalSEO } from '@components/utility';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { StylesReset, StylesGlobal } from './styles';
import { loadStage2Fonts, stage1FontDeclarations } from './fonts';

export const Layout: React.FC<LayoutProps> = ({
    children,
    noHeader,
    noFooter,
}) => (
    <>
        <GlobalSEO />
        <StylesReset />
        <StylesGlobal />
        <Helmet>
            <style>{stage1FontDeclarations}</style>
            <script type="text/javascript">{loadStage2Fonts()}</script>
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
