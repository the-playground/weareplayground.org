import React from 'react';
import Helmet from 'react-helmet';

const SnipcartLibs = () => (
	<Helmet>
		<link rel="stylesheet" src="https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css" type="text/css" />
		<script defer type="text/javascript" src="https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js" />
	</Helmet>
);

export default SnipcartLibs;
