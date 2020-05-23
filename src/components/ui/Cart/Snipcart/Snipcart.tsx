import React from 'react';
import { Helmet } from 'react-helmet';

export const Snipcart: React.FC = () => (
    <>
        <Helmet>
            <script
                defer
                type="text/javascript"
                src="https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.js"
            />
        </Helmet>
        <div
            id="snipcart"
            data-api-key={process.env.GATSBY_SNIPCART_API_KEY}
            hidden
        />
    </>
);
