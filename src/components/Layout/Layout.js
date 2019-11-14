import React from 'react';

// UI imports

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

export default Layout;
