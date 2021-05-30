import React from 'react';
import { Helmet } from 'react-helmet';

import { isSSR } from '../../../shared/lib';

export const DonateForm = () => {
    return (
        <>
            <Helmet>
                {!isSSR && (
                    <script
                        src="https://donorbox.org/widget.js"
                        paypalExpress="true"
                    />
                )}
            </Helmet>
            <div className="donation-form">
                <iframe
                    title="donate"
                    allowpaymentrequest=""
                    frameBorder="0"
                    name="donorbox"
                    seamless="seamless"
                    scrolling="no"
                    src="https://donorbox.org/embed/dare2havenerve-fundraiser"
                    style={{}}
                    width="100%"
                />
            </div>
        </>
    );
};
