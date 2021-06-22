import React, { useState } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import { CircularProgress, BodyText } from '@web/ui/core';
import { zIndex, spacing, borders } from '@web/ui/tokens';

// TYPES
interface DonateFormProps {
    campaignID: string;
    className?: string;
}

// STYLES
const maxWidth = '425px';
const minWidth = '250px';
const minHeight = '550px';

export const StyledDonateForm = styled.div<Pick<DonateFormProps, 'className'>>`
    margin: 0 auto;
    position: relative;
    text-align: center;
    width: 100%;

    iframe {
        border-radius: ${borders.defaultRadius};
        min-height: ${minHeight};
        position: relative;
        z-index: ${zIndex.front};

        &.--is-loading {
            border: 1px solid ${({ theme }) => theme.surfaces.paperAccent};
        }
    }

    .loader {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: ${zIndex.base};
    }

    .loader > .text {
        margin-bottom: ${spacing.component.xl};
    }
`;

// COMPONENT DEFINITION
export const DonateForm = ({
    campaignID,
    className,
}: DonateFormProps): JSX.Element => {
    const classNames = classnames('donation-form', className);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <StyledDonateForm className={classNames}>
            {!isLoaded && (
                <div className="loader">
                    <CircularProgress color="accent" size="l" />
                    <div className="text">
                        <BodyText color="medium" size="m">
                            Donation form loading...
                        </BodyText>
                    </div>
                </div>
            )}
            <iframe
                onLoad={() => setIsLoaded(true)}
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
                    minHeight,
                    maxHeight: 'none !important',
                }}
                width="100%"
                className={isLoaded ? '--loaded' : `--is-loading`}
            />
        </StyledDonateForm>
    );
};
