import PropTypes from 'prop-types';

// Structural imports
import { Footer } from './Footer';
import { Header } from './Header';

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
	children: PropTypes.object.isRequired,
	noHeader: PropTypes.bool,
	noFooter: PropTypes.bool,
};

Layout.defaultProps = {
	noHeader: false,
	noFooter: false,
};

export default Layout;
