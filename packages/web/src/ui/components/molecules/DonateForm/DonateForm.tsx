import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';

import { isSSR } from '@web/shared/utils';

export const DonateForm = ({
    campaignID,
    className,
}: DonateFormProps): JSX.Element => {
    const classNames = classnames('donation-form', className);

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
            <div className={classNames}>
                <iframe
                    title="donate"
                    allowpaymentrequest=""
                    frameBorder="0"
                    name="donorbox"
                    seamless="seamless"
                    scrolling="no"
                    src={`https://donorbox.org/embed/${campaignID}`}
                    style={{}}
                    width="100%"
                />
            </div>
        </>
    );
};

interface DonateFormProps {
    campaignID: string;
    className?: string;
}
