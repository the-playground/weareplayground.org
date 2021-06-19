import React from 'react';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import styled, { css } from 'styled-components';

import { isSSR } from '@web/shared/utils';

// TYPES
interface DonateFormProps {
    campaignID: string;
    className?: string;
}

// STYLES

const maxWidth = '425px';
const minWidth = '250px';
const minHeight = '500px';

export const StyledDonateForm = styled.div<Pick<DonateFormProps, 'className'>>`
    margin: 0 auto;
    text-align: center;
    width: 100%;

    iframe {
        background-color: ${({ theme }) => theme.surfaces.paper};
        min-height: ${minHeight};
    }
`;

// COMPONENT DEFINITION
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
            <StyledDonateForm className={classNames}>
                <iframe
                    title="donate"
                    allowpaymentrequest=""
                    frameBorder="0"
                    name="donorbox"
                    seamless="seamless"
                    scrolling="no"
                    src={`https://donorbox.org/embed/${campaignID}`}
                    style={{
                        maxWidth,
                        minWidth,
                        minHeight: '500px',
                        maxHeight: 'none !important',
                    }}
                    width="100%"
                />
            </StyledDonateForm>
        </>
    );
};
