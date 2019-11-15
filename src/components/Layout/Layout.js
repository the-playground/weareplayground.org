import React from 'react';
import PropTypes from 'prop-types';

// Structural imports
import { Header } from './Header';
import { Footer } from './Footer';
import { SEOGlobalMeta } from '../SEO';

const Layout = ({ children, noHeader, noFooter }) => (
	<>
		<SEOGlobalMeta />

		{noHeader ? '' : <Header />}
		<main>{children}</main>
		{noFooter ? '' : <Footer />}
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
