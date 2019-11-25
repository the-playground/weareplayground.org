import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Header } from './Header';
import { Footer } from './Footer';
import { SEOGlobalMeta } from '../SEO';
import { StylesReset, StylesGlobal } from './Styles';
import { loadStage2Fonts } from './Scripts/stage2Fonts';
import { Cart } from '../Cart';

const Layout = ({ children, noHeader, noFooter }) => (
	<>
		<SEOGlobalMeta />
		<StylesReset />
		<StylesGlobal />
		<Helmet>
			<script type="text/javascript">{loadStage2Fonts()}</script>
		</Helmet>

		{noHeader ? '' : <Header />}
		<main>{children}</main>
		{noFooter ? '' : <Footer />}

		<Cart />
	</>
);

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
	noHeader: PropTypes.bool,
	noFooter: PropTypes.bool,
};

Layout.defaultProps = {
	noHeader: false,
	noFooter: false,
};

export default Layout;
