import React from 'react';
import { Helmet } from 'react-helmet';
import { SNIPCART_SCRIPT_VERSION } from '@app/config/snipcart';

export const Snipcart: React.FC = () => (
    <>
        <Helmet>
            <script
                defer
                type="text/javascript"
                src={`https://cdn.snipcart.com/themes/v${SNIPCART_SCRIPT_VERSION}/default/snipcart.js`}
            />
        </Helmet>
        <div
            id="snipcart"
            data-api-key={process.env.GATSBY_SNIPCART_API_KEY}
            hidden
        />
    </>
);
