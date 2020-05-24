import React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { StylesReset, StylesGlobal } from './styles';
import { loadStage2Fonts } from './scripts/stage2Fonts';

export const Layout: React.FC<LayoutProps> = ({
    children,
    noHeader,
    noFooter,
}) => (
    <>
        <StylesReset />
        <StylesGlobal />
        <Helmet>
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
