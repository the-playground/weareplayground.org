import React from 'react';
import Helmet from 'react-helmet';

const Snipcart = () => (
	<>
		<Helmet>
			<script defer type="text/javascript" src="https://cdn.snipcart.com/themes/v3.0.6/default/snipcart.js" />
		</Helmet>
		<div id="snipcart" data-api-key={process.env.GATSBY_SNIPCART_API_KEY} hidden />
	</>
);

export default Snipcart;
