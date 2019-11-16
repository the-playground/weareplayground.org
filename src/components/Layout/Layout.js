import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';
import { Footer } from './Footer';
import { SEOGlobalMeta } from '../SEO';
import { GlobalStyles } from './GlobalStyles';
import { SnipcartLibs, SnipcartMount } from '../Snipcart';

const Layout = ({ children, noHeader, noFooter }) => (
	<>
		<SEOGlobalMeta />
		<GlobalStyles />
		<SnipcartLibs />

		{noHeader ? '' : <Header />}
		<main>{children}</main>
		{noFooter ? '' : <Footer />}

		<SnipcartMount />
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
